import React from 'react';
import styles from './LoginPage.module.scss';
import { Login } from '@/widgets';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <Login />
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: 2 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          transition={{ type: 'spring' }}
          className={styles.imageContainer}
        ></motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
