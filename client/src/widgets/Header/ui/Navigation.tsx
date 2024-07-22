import React from 'react';
import styles from './Navigation.module.scss';
import NavElement from '@/widgets/Header/ui/NavElement.tsx';
import ShareIcon from '@/assets/icons/share-icon.svg';
import NotificationIcon from '@/assets/icons/notifications-icon.svg';

const Navigation: React.FC = () => {
  return (
    <nav className={styles.navigation}>
      <NavElement
        link={'/notification'}
        text={'Notifications'}
        icon={NotificationIcon}
      />
      <NavElement link={'/share'} text={'Share'} icon={ShareIcon} />
    </nav>
  );
};

export default Navigation;
