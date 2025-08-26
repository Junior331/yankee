import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNotifications } from '@/hooks/useNotifications';

export interface SocialNotification {
  id: number;
  active: boolean;
  name: string;
  type?: string;
  photo: string;
  messages: string[];
  previewPhotoPosted: string;
  timestamp: string;
  read: boolean;
}

interface NotificationsContextType {
  notifications: SocialNotification[];
  unreadCount: number;
  addNotification: (type: string, userName?: string, showPush?: boolean) => Promise<void>;
  markAsRead: (notificationId: number) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  clearAllNotifications: () => Promise<void>;
  refreshNotifications: () => Promise<void>;
}

const NotificationsContext = createContext<NotificationsContextType | undefined>(undefined);

const NOTIFICATION_TYPES = [
  { type: 'like', messages: ['liked your post', 'gave your pic a double-tap', 'hit the like on your notion'] },
  { type: 'follow', messages: ['started following you', 'just hit the follow button on you'] },
  { type: 'comment', messages: ['commented on your post', 'just dropped a thought on your post', 'couldn\'t keep quiet, so here\'s a comment'] },
  { type: 'poke', messages: ['sent you a friendly poke', 'sent you a friendly jab 👉', 'poked you back'] },
  { type: 'story', messages: ['viewed your story', 'is vibing with your story'] },
];

const SAMPLE_USERS = [
  'Sarah Chen', 'Marcus Johnson', 'Elena Rodriguez', 'James Wilson', 
  'Aisha Patel', 'Ryan Brooks', 'Sophie Martin', 'David Kim',
  'Sophia Carter', 'Liam Johnson', 'Ethan Davis', 'Jackson Lee'
];

export const NotificationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<SocialNotification[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);
  
  const { schedulePushNotification, setBadgeCount } = useNotifications();

  // Load persisted notifications
  const refreshNotifications = useCallback(async () => {
    try {
      const stored = await AsyncStorage.getItem('socialNotifications');
      if (stored) {
        const parsedNotifications = JSON.parse(stored);
        setNotifications(parsedNotifications);
        const unread = parsedNotifications.filter((n: SocialNotification) => !n.read).length;
        setUnreadCount(unread);
        await setBadgeCount(unread);
      }
    } catch (error) {
      console.error('Error loading social notifications:', error);
    }
  }, [setBadgeCount]);

  useEffect(() => {
    refreshNotifications();
  }, [refreshNotifications]);

  const saveNotifications = useCallback(async (newNotifications: SocialNotification[]) => {
    try {
      await AsyncStorage.setItem('socialNotifications', JSON.stringify(newNotifications));
      const unread = newNotifications.filter(n => !n.read).length;
      setUnreadCount(unread);
      await setBadgeCount(unread);
    } catch (error) {
      console.error('Error saving social notifications:', error);
    }
  }, [setBadgeCount]);

  const generateNotification = useCallback((type: string, userName?: string): SocialNotification => {
    const notificationType = NOTIFICATION_TYPES.find(t => t.type === type) || NOTIFICATION_TYPES[0];
    const user = userName || SAMPLE_USERS[Math.floor(Math.random() * SAMPLE_USERS.length)];
    const message = notificationType.messages[Math.floor(Math.random() * notificationType.messages.length)];
    
    return {
      id: Date.now() + Math.random(),
      active: Math.random() > 0.4, // 60% chance of being active
      name: user,
      type: type === 'follow' ? 'Follow' : type === 'poke' ? 'Poke back' : undefined,
      photo: `https://picsum.photos/seed/${Date.now()}/200/300`,
      messages: [message],
      previewPhotoPosted: `https://picsum.photos/seed/${Date.now() + 1}/200/300`,
      timestamp: new Date().toISOString(),
      read: false,
    };
  }, []);

  const addNotification = useCallback(async (type: string, userName?: string, showPush = true) => {
    const newNotification = generateNotification(type, userName);
    
    if (showPush) {
      const titles = {
        like: '❤️ New Like!',
        follow: '👤 New Follower!',
        comment: '💬 New Comment!',
        poke: '👉 Someone Poked You!',
        story: '👁️ Story View!',
      };
      
      await schedulePushNotification({
        title: titles[type as keyof typeof titles] || '🔔 New Notification!',
        body: `${newNotification.name} ${newNotification.messages[0]}`,
        data: { type, userId: userName, notificationId: newNotification.id }
      });
    }

    const updatedNotifications = [newNotification, ...notifications];
    setNotifications(updatedNotifications);
    await saveNotifications(updatedNotifications);
  }, [notifications, generateNotification, schedulePushNotification, saveNotifications]);

  const markAsRead = useCallback(async (notificationId: number) => {
    const updatedNotifications = notifications.map(n => 
      n.id === notificationId ? { ...n, read: true } : n
    );
    setNotifications(updatedNotifications);
    await saveNotifications(updatedNotifications);
  }, [notifications, saveNotifications]);

  const markAllAsRead = useCallback(async () => {
    const updatedNotifications = notifications.map(n => ({ ...n, read: true }));
    setNotifications(updatedNotifications);
    await saveNotifications(updatedNotifications);
  }, [notifications, saveNotifications]);

  const clearAllNotifications = useCallback(async () => {
    setNotifications([]);
    setUnreadCount(0);
    await AsyncStorage.removeItem('socialNotifications');
    await setBadgeCount(0);
  }, [setBadgeCount]);

  return (
    <NotificationsContext.Provider
      value={{
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearAllNotifications,
        refreshNotifications,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export const useNotificationsContext = () => {
  const context = useContext(NotificationsContext);
  if (context === undefined) {
    throw new Error('useNotificationsContext must be used within a NotificationsProvider');
  }
  return context;
};