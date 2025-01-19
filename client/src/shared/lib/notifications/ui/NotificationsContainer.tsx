import { AnimatePresence } from 'framer-motion';
import React, { useContext } from 'react';

import { NotificationContext } from '../context/NotificationContext';
import Notification from './Notification';
import styles from './notification.module.scss';

const NotificationsContainer: React.FC = () => {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className={styles.container}>
      <AnimatePresence>
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            message={notification.message}
            duration={notification.duration}
            type={notification.type}
            onDismiss={() => removeNotification(notification.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default NotificationsContainer;
