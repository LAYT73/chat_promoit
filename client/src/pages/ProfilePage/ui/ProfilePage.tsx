import React from 'react';
import styles from './ProfilePage.module.scss';
import { AnimatedText, BlockContainer, Heading } from '@/shared/ui';
import { ProfileForm } from '@/features';

const ProfilePage: React.FC = () => {
  return (
    <BlockContainer className={styles.profilePage}>
      <Heading
        size={'h5'}
        fontStyle={'semiBold'}
        style={styles.profilePage__heading}
      >
        <AnimatedText text={'Profile Page'} />
      </Heading>
      <ProfileForm />
    </BlockContainer>
  );
};

export default ProfilePage;
