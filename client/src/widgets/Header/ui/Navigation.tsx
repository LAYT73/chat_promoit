import React from 'react';

import { useTranslate } from '@/app/i18n/i18n.ts';
import NotificationIcon from '@/assets/icons/notifications-icon.svg';
import ShareIcon from '@/assets/icons/share-icon.svg';
import NavElement from '@/widgets/Header/ui/NavElement.tsx';

import styles from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const translate = useTranslate();
  return (
    <nav className={styles.navigation}>
      <NavElement
        link={'/notification'}
        text={translate('notifications')}
        icon={NotificationIcon}
      />
      <NavElement link={'/share'} text={translate('share')} icon={ShareIcon} />
    </nav>
  );
};

export default Navigation;
