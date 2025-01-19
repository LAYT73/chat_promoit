import cn from 'classnames';
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

import {
    NotificationProps, typeIconMap, typeMessageMap
} from '@/shared/lib/notifications/ui/Notification.types.ts';
import { AnimatedText } from '@/shared/ui';

import styles from './notification.module.scss';

const Notification: React.FC<NotificationProps> = ({
  message,
  onDismiss,
  duration,
  type = 'info',
}) => {
  useEffect(() => {
    if (duration) {
      const timer = setTimeout(onDismiss, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onDismiss]);

  return (
    <motion.div
      className={cn(styles.notification)}
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -20 }}
      onClick={onDismiss}
    >
      <img
        src={typeIconMap[type]}
        alt={'Noitication icon'}
        className={cn(styles.notificationIcon)}
      />
      <span
        className={cn(styles.notificationType, {
          [styles.success]: type === 'success',
          [styles.error]: type === 'error',
          [styles.info]: type === 'info',
          [styles.warning]: type === 'warning',
        })}
      >
        {typeMessageMap[type]}
      </span>
      <AnimatedText text={message} />
    </motion.div>
  );
};

export default Notification;
