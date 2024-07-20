import React, { useContext } from 'react';
import styles from './LoginPage.module.scss';
import { Login } from '@/widgets';
import { motion } from 'framer-motion';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';

const LoginPage: React.FC = () => {
  const { addNotification } = useContext(NotificationContext);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Login />
        <motion.div
          onClick={() => addNotification('This is a notification!', 3000)}
          initial={{ opacity: 0, rotate: 2 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring' }}
          className={styles.imageContainer}
        ></motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
