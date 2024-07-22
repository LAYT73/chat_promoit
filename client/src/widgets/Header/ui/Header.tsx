import React from 'react';
import styles from './Header.module.scss';
import { BlockContainer } from '@/shared/ui';
import Navigation from './Navigation.tsx';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <BlockContainer className={styles.container}>
        <Navigation />
      </BlockContainer>
    </div>
  );
};

export default Header;
