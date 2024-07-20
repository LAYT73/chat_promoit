import React from 'react';
import styles from './LoginForm.module.scss';
import { Button, Heading, Input, Paragraph } from '@/shared/ui';
import MailIcon from '@/assets/icons/mail.svg';
import PadlockIcon from '@/assets/icons/padlock.svg';

const LoginForm: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading size={'h2'} fontStyle={'regular'}>
          {"Let's"} get
        </Heading>
        <Heading size={'h2'} fontStyle={'bold'} style={styles.headingGradient}>
          creative!
        </Heading>
      </div>
      <Paragraph size={'large'} style={styles.paragraph}>
        Log in to Artificium to start creating magic.
      </Paragraph>
      <Input
        type={'email'}
        placeholder={'Enter your email'}
        icon={MailIcon}
        hint={'Hint text'}
      />
      <Input
        type={'password'}
        placeholder={'Enter your password'}
        icon={PadlockIcon}
      />
      <Button style={styles.buttonLogin}>Log in</Button>
    </div>
  );
};

export default LoginForm;
