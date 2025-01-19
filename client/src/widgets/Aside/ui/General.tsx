import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslate } from '@/app/i18n/i18n.ts';
import SearchIcon from '@/assets/icons/search-icon.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import ProfileIcon from '@/assets/icons/user-icon.svg';
import { Paragraph } from '@/shared/ui';
import Card from '@/widgets/Aside/ui/Card.tsx';

import styles from './General.module.scss';

const General: React.FC = () => {
  const translate = useTranslate();
  return (
    <div className={styles.general}>
      <Paragraph size={'small'} styleParagraph={styles.title}>
        {translate('general')}
      </Paragraph>
      <div className={styles.content}>
        <Link to={'/search'} className={styles.link}>
          <Card
            title={translate('search')}
            icon={SearchIcon}
            onClick={() => {}}
          />
        </Link>
        <Link to={'/profile'} className={styles.link}>
          <Card
            title={translate('profile')}
            icon={ProfileIcon}
            onClick={() => {}}
          />
        </Link>
        <Card
          title={translate('settings')}
          icon={SettingsIcon}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default General;
