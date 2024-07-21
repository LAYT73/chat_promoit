import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import {
  AnimatedText,
  Button,
  CheckBox,
  Heading,
  Input,
  Paragraph,
} from '@/shared/ui';
import MailIcon from '@/assets/icons/mail.svg';
import PadlockIcon from '@/assets/icons/padlock.svg';
import { Link } from 'react-router-dom';
import { useLogin } from '@/shared/hooks';

interface IFormInput {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { login, loading } = useLogin();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await login({
      email: data.email,
      password: data.password,
      remember: data.remember,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading size={'h2'} fontStyle={'regular'}>
          <AnimatedText text={"Let's get"} />
        </Heading>
        <Heading size={'h2'} fontStyle={'bold'} style={styles.headingGradient}>
          creative!
        </Heading>
      </div>
      <Paragraph size={'large'} style={styles.paragraph}>
        <AnimatedText text={'Log in to Artificium to start creating magic.'} />
      </Paragraph>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <Controller
            defaultValue={''}
            name="email"
            control={control}
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <Input
                type="email"
                placeholder="Enter your email"
                icon={MailIcon}
                {...field}
                hint={errors.email ? errors.email.message : undefined}
              />
            )}
          />
        </div>
        <div className={styles.inputContainer}>
          <Controller
            defaultValue={''}
            name="password"
            control={control}
            rules={{
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Password cannot exceed 20 characters',
              },
            }}
            render={({ field }) => (
              <Input
                type="password"
                placeholder="Enter your password"
                icon={PadlockIcon}
                className={styles.input}
                {...field}
                hint={errors.password ? errors.password.message : undefined}
              />
            )}
          />
        </div>
        <div className={styles.subData}>
          <Controller
            name="remember"
            control={control}
            render={({ field }) => (
              <CheckBox {...field}>
                <AnimatedText text={'Remember me'} />
              </CheckBox>
            )}
          />
          <Link to={'/forgot-password'}>Forgot password?</Link>
        </div>
        <Button
          type="submit"
          styleButton={styles.buttonLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
