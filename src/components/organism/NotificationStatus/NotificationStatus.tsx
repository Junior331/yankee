import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNotifications } from '@/hooks/useNotifications';
import { useUnreadMessages } from '@/hooks/useUnreadMessages';

export const NotificationStatus = () => {
  const { expoPushToken } = useNotifications();
  const { unreadCounts } = useUnreadMessages();

  if (!expoPushToken && unreadCounts.total === 0) return null;

  return (
    <View style={styles.container}>
      {expoPushToken && (
        <Text style={styles.tokenText}>
          🔔 Notifications enabled
        </Text>
      )}
      {unreadCounts.total > 0 && (
        <Text style={styles.unreadText}>
          {unreadCounts.total} unread message{unreadCounts.total > 1 ? 's' : ''}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c3e50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginVertical: 4,
    alignItems: 'center',
  },
  tokenText: {
    color: '#27ae60',
    fontSize: 12,
    fontWeight: '500',
  },
  unreadText: {
    color: '#e74c3c',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});