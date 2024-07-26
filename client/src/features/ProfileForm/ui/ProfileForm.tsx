import { FunctionComponent } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import styles from './ProfileForm.module.scss';
import MailIcon from '@/assets/icons/mail.svg';
import PadlockIcon from '@/assets/icons/padlock.svg';
import { useTranslate } from '@/app/i18n/i18n.ts';
import { getUserProfileFromLocalStorage } from '@/shared/lib/localStorage/localStorage.ts';
import { Button, Input, ModalConfirm } from '@/shared/ui';
import AvatarUploader from '@/features/ProfileForm/ui/AvatarUploader.tsx';
import { useModal } from '@/shared/hooks';

interface IFormInput {
  email: string;
  username: string;
  newPassword: string;
  confirmPassword: string;
}
const ProfileForm: FunctionComponent = () => {
  const profile = getUserProfileFromLocalStorage();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const translate = useTranslate();
  const { closeModal, isOpen, toggleModal, openModal } = useModal();

  const handleProceed = () => {
    console.log('Proceed clicked');
    closeModal();
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    closeModal();
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    openModal();
    console.log(data);
  };

  const handleImageUpload = (file: File) => {
    // Здесь можно обработать загруженный файл (например, отправить на сервер)
    console.log('Uploaded file:', file);
  };

  if (!profile) {
    return null;
  }

  return (
    <div className={styles.container}>
      <AvatarUploader onImageUpload={handleImageUpload} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          defaultValue={profile.email}
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
              disabled
              hint={errors.email ? errors.email.message : undefined}
            />
          )}
        />
        <Controller
          defaultValue={profile.username}
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
              title={translate('username')}
              type="text"
              placeholder={translate('enter_username')}
              className={styles.input}
              {...field}
              hint={errors.username ? errors.username.message : undefined}
            />
          )}
        />
        <Controller
          defaultValue={''}
          name="newPassword"
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
              placeholder={translate('enter_new_password')}
              icon={PadlockIcon}
              className={styles.input}
              {...field}
              hint={errors.newPassword ? errors.newPassword.message : undefined}
            />
          )}
        />
        <Controller
          defaultValue={''}
          name="confirmPassword"
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
              placeholder={translate('confirm_new_password')}
              icon={PadlockIcon}
              className={styles.input}
              {...field}
              hint={errors.confirmPassword ? errors.confirmPassword.message : undefined}
            />
          )}
        />
        <Button>Открыть</Button>
        <ModalConfirm
          isOpen={isOpen}
          onClose={toggleModal}
          onProceed={handleProceed}
          onCancel={handleCancel}
          title="Confirm Action"
          message="Are you sure you want to proceed with this action?"
        />
      </form>
    </div>
  );
};

export default ProfileForm;
