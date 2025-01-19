import { useContext } from 'react';

import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';
import {
    NotificationContextType
} from '@/shared/lib/notifications/context/NotificationContext.types.tsx';

export const useNotification = (): NotificationContextType => {
  return useContext(NotificationContext);
};
