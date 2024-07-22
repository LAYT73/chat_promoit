import React from 'react';
import styles from './Signup.module.scss';
import Logo from '@/assets/icons/logo.svg';
import { AnimatedText, Paragraph } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { SignupForm } from '@/features';

const Signup: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <Link to={'/login'}>Log In</Link>
      </div>
      <SignupForm />
      <div className={styles.actions}>
        <Paragraph>
          <AnimatedText text={'Artificium.app © 2023'} />
        </Paragraph>
        <Link to={'/privacy-policy'}>Privacy Policy</Link>
      </div>
    </div>
  );
};

export default Signup;
