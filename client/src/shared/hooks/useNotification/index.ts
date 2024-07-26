import { useContext } from 'react';
import { NotificationContextType } from '@/shared/lib/notifications/context/NotificationContext.types.tsx';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';

export const useNotification = (): NotificationContextType => {
  return useContext(NotificationContext);
};
