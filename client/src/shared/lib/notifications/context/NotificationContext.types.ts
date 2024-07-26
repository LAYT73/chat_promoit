export interface Notification {
  id: string;
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (
    message: string,
    duration?: number,
    type?: 'success' | 'error' | 'info' | 'warning',
  ) => void;
  removeNotification: (id: string) => void;
}
