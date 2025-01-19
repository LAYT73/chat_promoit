import React from 'react';

import { ProfileForm } from '@/features';
import { AnimatedText, BlockContainer, Heading } from '@/shared/ui';

import styles from './ProfilePage.module.scss';

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
