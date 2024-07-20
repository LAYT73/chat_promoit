import React from 'react';
import styles from './LoginPage.module.scss';
import { Login } from '@/widgets';

const LoginPage: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Login />
        <div className={styles.imageContainer}></div>
      </div>
    </div>
  );
};

export default LoginPage;
