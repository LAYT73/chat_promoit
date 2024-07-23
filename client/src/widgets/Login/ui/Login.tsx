import React from 'react';
import styles from './Login.module.scss';
import Logo from '@/assets/icons/logo.svg';
import { LoginForm } from '@/features';
import { AnimatedText, Paragraph } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { useTranslate } from '@/app/i18n/i18n.ts';
const Login: React.FC = () => {
  const translate = useTranslate();
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={Logo} alt="logo" />
      <LoginForm />
      <div className={styles.actions}>
        <Paragraph>
          <AnimatedText text={translate('dont_have_account')} />
        </Paragraph>
        <Link to={'/sign-up'}>{translate('signup')}</Link>
      </div>
    </div>
  );
};

export default Login;
