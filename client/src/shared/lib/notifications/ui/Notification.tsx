import React, { useEffect } from 'react';
import styles from './notification.module.scss';
import { motion } from 'framer-motion';
import cn from 'classnames';

interface NotificationProps {
  message: string;
  onDismiss: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

const Notification: React.FC<NotificationProps> = ({
  message,
  onDismiss,
  duration,
  type,
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  return (
    <motion.div
      className={cn(styles.notification, {
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.info]: type === 'info',
      })}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -20 }}
      onClick={onDismiss}
    >
      {message}
    </motion.div>
  );
};

export default Notification;
