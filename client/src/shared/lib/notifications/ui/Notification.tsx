import React, { useEffect } from 'react';
import styles from './notification.module.scss';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { AnimatedText } from '@/shared/ui';
import InfoIcon from '@/assets/icons/info-icon.svg';
import WarningIcon from '@/assets/icons/warning-icon.svg';
import ErrorIcon from '@/assets/icons/error-icon.svg';
import SuccessIcon from '@/assets/icons/success-icon.svg';

interface NotificationProps {
  message: string;
  onDismiss: () => void;
  duration?: number;
  type?: 'success' | 'error' | 'info' | 'warning';
}

const typeIconMap = {
  success: SuccessIcon,
  error: ErrorIcon,
  info: InfoIcon,
  warning: WarningIcon,
};

const typeMessageMap = {
  success: 'Success! ',
  error: 'Something went wrong. ',
  info: 'Info: ',
  warning: 'Warning! ',
};

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
