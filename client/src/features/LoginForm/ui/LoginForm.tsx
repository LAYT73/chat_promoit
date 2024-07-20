import React from 'react';
import styles from './LoginForm.module.scss';
import { Button, CheckBox, Heading, Input, Paragraph } from '@/shared/ui';
import MailIcon from '@/assets/icons/mail.svg';
import PadlockIcon from '@/assets/icons/padlock.svg';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const LoginForm: React.FC = () => {
  const title: string[] = "Let's get".split(' ');
  const paragraph: string[] = 'Log in to Artificium to start creating magic.'.split(' ');

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading size={'h2'} fontStyle={'regular'}>
          {title.map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{' '}
            </motion.span>
          ))}
        </Heading>
        <Heading size={'h2'} fontStyle={'bold'} style={styles.headingGradient}>
          creative!
        </Heading>
      </div>
      <Paragraph size={'large'} style={styles.paragraph}>
        {paragraph.map((el, i) => (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 10,
            }}
            key={i}
          >
            {el}{' '}
          </motion.span>
        ))}
      </Paragraph>
      <Input type={'email'} placeholder={'Enter your email'} icon={MailIcon} />
      <Input
        type={'password'}
        placeholder={'Enter your password'}
        icon={PadlockIcon}
        className={styles.input}
      />
      <div className={styles.subData}>
        <CheckBox>Remember me</CheckBox>
        <Link to={'/forgot-password'}>Forgot password?</Link>
      </div>
      <Button style={styles.buttonLogin}>Log in</Button>
    </div>
  );
};

export default LoginForm;
