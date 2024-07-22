import React from 'react';
import styles from './ProfilePage.module.scss';
import {
  AnimatedText,
  BlockContainer, Button,
  Heading,
  ModalConfirm,
} from '@/shared/ui';
import { useModal } from '@/shared/hooks';

const ProfilePage: React.FC = () => {
  const { closeModal, isOpen, toggleModal, openModal } = useModal();

  const handleProceed = () => {
    console.log('Proceed clicked');
    closeModal();
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    closeModal();
  };
  return (
    <BlockContainer className={styles.profilePage}>
      <Heading
        size={'h5'}
        fontStyle={'semiBold'}
        style={styles.profilePage__heading}
      >
        <AnimatedText text={'Profile Page'} />
      </Heading>
      <Button onClick={openModal}>Открыть</Button>
      <ModalConfirm
        isOpen={isOpen}
        onClose={toggleModal}
        onProceed={handleProceed}
        onCancel={handleCancel}
        title="Confirm Action"
        message="Are you sure you want to proceed with this action?"
      />
    </BlockContainer>
  );
};

export default ProfilePage;
