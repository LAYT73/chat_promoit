import React from 'react';
import styles from './Signup.module.scss';
import Logo from '@/assets/icons/logo.svg';
import { AnimatedText, Paragraph } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { SignupForm } from '@/features';
import { useTranslate } from '@/app/i18n/i18n.ts';

const Signup: React.FC = () => {
  const translate = useTranslate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.logo} src={Logo} alt="logo" />
        <Link to={'/login'}>{translate('login')}</Link>
      </div>
      <SignupForm />
      <div className={styles.actions}>
        <Paragraph>
          <AnimatedText text={'Artificium.app © 2024'} />
        </Paragraph>
        <Link to={'/privacy-policy'}>{translate('privacy_policy')}</Link>
      </div>
    </div>
  );
};

export default Signup;
