import React from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import styles from './SignupForm.module.scss';
import { AnimatedText, Button, CheckBox, Heading, Input } from '@/shared/ui';
import { Link } from 'react-router-dom';
import { useAuth } from '@/shared/hooks';

interface IFormInput {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const SignupForm: React.FC = () => {
  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const { authenticate, loading } = useAuth<IFormInput>('/auth/signup');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await authenticate({
      email: data.email,
      username: data.username,
      password: data.password,
      confirmPassword: data.confirmPassword,
      terms: data.terms,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading size={'h2'} fontStyle={'regular'}>
          <AnimatedText
            text={
              'Connect with your team and bring your creative ideas to life.'
            }
          />
        </Heading>
      </div>
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
                placeholder="Enter your email"
                {...field}
                hint={errors.email ? errors.email.message : undefined}
              />
            )}
          />
          <Controller
            defaultValue={''}
            name="username"
            control={control}
            rules={{
              required: 'Username is required',
              minLength: {
                value: 6,
                message: 'Username must be at least 6 characters long',
              },
              maxLength: {
                value: 20,
                message: 'Username cannot exceed 20 characters',
              },
            }}
            render={({ field }) => (
              <Input
                title={'Username'}
                type="text"
                placeholder="Enter your username"
                {...field}
                hint={errors.email ? errors.email.message : undefined}
              />
            )}
          />
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
                title={'Password'}
                type="password"
                placeholder="Enter your password"
                {...field}
                hint={errors.password ? errors.password.message : undefined}
              />
            )}
          />
          <Controller
            defaultValue={''}
            name="confirmPassword"
            control={control}
            rules={{
              required: 'Please confirm your password',
              validate: (value) =>
                value === watch('password') || 'Passwords do not match',
            }}
            render={({ field }) => (
              <Input
                title={'Confirm Password'}
                type="password"
                placeholder="Confirm your password"
                {...field}
                hint={
                  errors.confirmPassword
                    ? errors.confirmPassword.message
                    : undefined
                }
              />
            )}
          />
        </div>
        <div className={styles.subData}>
          <Controller
            name="terms"
            control={control}
            render={({ field }) => (
              <CheckBox {...field}>
                <AnimatedText text={'I agree with'} />
              </CheckBox>
            )}
          />
          <Link to={'/terms-and-conditions'}>Terms and conditions</Link>
        </div>
        <Button
          type="submit"
          styleButton={styles.buttonLogin}
          disabled={loading}
        >
          {loading ? 'Creating account...' : 'Create free account'}
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;
