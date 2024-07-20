import React from 'react';
import styles from './Login.module.scss';
import Logo from '@/assets/icons/logo.svg';
import { LoginForm } from '@/features';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <LoginForm />
    </div>
  );
};

export default Login;
