import React from 'react';
import styles from './Login.module.scss';
import Logo from '@/assets/icons/logo.svg';
import { LoginForm } from '@/features';
import { Paragraph } from '@/shared/ui';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <LoginForm />
      <div className={styles.actions}>
        <Paragraph>{"Don't"} have an account? </Paragraph>
        <Link to={'/signup'}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
