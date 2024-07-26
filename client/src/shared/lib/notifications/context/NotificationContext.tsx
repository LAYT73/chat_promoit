import React, { createContext, useState, ReactNode, useCallback } from 'react';
import NotificationsContainer from '@/shared/lib/notifications/ui/NotificationsContainer.tsx';
import {
  NotificationContextType,
  Notification,
} from '@/shared/lib/notifications/context/NotificationContext.types.ts';

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
        const audio = new Audio('/chpok.mp3');
        audio.volume = 0.2;
        audio.play().catch((error) => {
          console.error('Ошибка при воспроизведении звука:', error);
        });
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
