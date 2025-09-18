import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotifications } from './useNotifications';
import { mocks } from '@/services/mocks';

interface UnreadCounts {
  mainConversations: number;
  chatRequests: number;
  total: number;
}

export const useUnreadMessages = () => {
  const [unreadCounts, setUnreadCounts] = useState<UnreadCounts>({
    mainConversations: 0,
    chatRequests: 0,
    total: 0,
  });
  
  const { setBadgeCount, schedulePushNotification } = useNotifications();

  const calculateUnreadCounts = useCallback(async () => {
    try {
      // Calculate unread counts from mock data
      const mainUnread = mocks.mainConversations.reduce((acc, conv) => acc + conv.unreadCount, 0);
      const requestsUnread = mocks.chatRequests.length; // All chat requests are considered unread
      const total = mainUnread + requestsUnread;

      const newCounts = {
        mainConversations: mainUnread,
        chatRequests: requestsUnread,
        total,
      };

      setUnreadCounts(newCounts);

      // Update app badge
      await setBadgeCount(total);

      // Store counts for persistence
      await AsyncStorage.setItem('unreadCounts', JSON.stringify(newCounts));

      return newCounts;
    } catch (error) {
      console.error('Error calculating unread counts:', error);
      return {
        mainConversations: 0,
        chatRequests: 0,
        total: 0,
      };
    }
  }, [setBadgeCount]);

  const markConversationAsRead = useCallback(async (conversationId: string) => {
    try {
      // In a real app, this would update the server
      // For now, we'll just update locally
      const updatedCounts = await calculateUnreadCounts();
      return updatedCounts;
    } catch (error) {
      console.error('Error marking conversation as read:', error);
    }
  }, [calculateUnreadCounts]);

  const simulateNewMessage = useCallback(async (fromUser: string, message: string, conversationId: string) => {
    try {
      // Show notification for new message
      await schedulePushNotification({
        title: `New message from ${fromUser}`,
        body: message,
        userId: fromUser,
        conversationId: conversationId,
        data: {
          type: 'new_message',
          timestamp: new Date().toISOString(),
        },
      });

      // Recalculate unread counts
      await calculateUnreadCounts();
    } catch (error) {
      console.error('Error simulating new message:', error);
    }
  }, [schedulePushNotification, calculateUnreadCounts]);

  const simulateNewChatRequest = useCallback(async (fromUser: string) => {
    try {
      // Show notification for new chat request
      await schedulePushNotification({
        title: `New chat request`,
        body: `${fromUser} wants to chat with you`,
        userId: fromUser,
        data: {
          type: 'chat_request',
          timestamp: new Date().toISOString(),
        },
      });

      // Recalculate unread counts
      await calculateUnreadCounts();
    } catch (error) {
      console.error('Error simulating new chat request:', error);
    }
  }, [schedulePushNotification, calculateUnreadCounts]);

  useEffect(() => {
    // Load persisted counts on mount
    const loadPersistedCounts = async () => {
      try {
        const stored = await AsyncStorage.getItem('unreadCounts');
        if (stored) {
          setUnreadCounts(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading persisted counts:', error);
      }
    };

    loadPersistedCounts();
    calculateUnreadCounts();
  }, [calculateUnreadCounts]);

  return {
    unreadCounts,
    calculateUnreadCounts,
    markConversationAsRead,
    simulateNewMessage,
    simulateNewChatRequest,
  };
};