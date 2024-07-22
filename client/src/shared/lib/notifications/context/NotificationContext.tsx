import React, { createContext, useState, ReactNode, useCallback } from 'react';
import NotificationsContainer from '@/shared/lib/notifications/ui/NotificationsContainer.tsx';

interface Notification {
  id: string;
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    message: string,
    duration?: number,
    type?: 'success' | 'error' | 'info' | 'warning',
  ) => void;
  removeNotification: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  addNotification: () => {},
  removeNotification: () => {},
});

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = useCallback(
    (
      message: string,
      duration?: number,
      type?: 'success' | 'error' | 'info' | 'warning',
    ) => {
      const id = Math.random().toString(36).substr(2, 9);
      if (notifications.length < 7) {
        setNotifications((prev) => [...prev, { id, message, duration, type }]);
      }
    },
    [notifications],
  );

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, removeNotification }}
    >
      {children}
      <NotificationsContainer />
    </NotificationContext.Provider>
  );
};
