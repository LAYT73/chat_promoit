import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './LoginForm.module.scss';
import { AnimatedText, Button, CheckBox, Input } from '@/shared/ui';
import MailIcon from '@/assets/icons/mail.svg';
import PadlockIcon from '@/assets/icons/padlock.svg';
import { Link } from 'react-router-dom';
import { useAuth } from '@/shared/hooks';
import { useTranslate } from '@/app/i18n/i18n.ts';
import { IFormInput } from '@/features/LoginForm/ui/LoginForm.types.ts';
import Header from '@/features/LoginForm/ui/Header.tsx';

const LoginForm: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { authenticate, loading } = useAuth<IFormInput>('/auth/login');
  const translate = useTranslate();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await authenticate({
      email: data.email,
      password: data.password,
      remember: data.remember,
    });
  };

  return (
    <div className={styles.container}>
      <Header />
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
                title={'Email'}
                type="email"
                placeholder={translate('enter_email')}
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
                title={translate('password')}
                type="password"
                placeholder={translate('enter_password')}
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
                <AnimatedText text={translate('remember_me')} />
              </CheckBox>
            )}
          />
          <Link to={'/forgot-password'}>{translate('forgot_password')}</Link>
        </div>
        <Button
          type="submit"
          styleButton={styles.buttonLogin}
          disabled={loading}
        >
          {loading ? 'Logging in...' : translate('login')}
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
