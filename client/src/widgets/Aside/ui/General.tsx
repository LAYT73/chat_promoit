import React from 'react';
import styles from './General.module.scss';
import { Paragraph } from '@/shared/ui';
import Card from '@/widgets/Aside/ui/Card.tsx';
import SearchIcon from '@/assets/icons/search-icon.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import ProfileIcon from '@/assets/icons/user-icon.svg';
import { Link } from 'react-router-dom';

const General: React.FC = () => {
  return (
    <div className={styles.general}>
      <Paragraph size={'small'} styleParagraph={styles.title}>
        GENERAL
      </Paragraph>
      <div className={styles.content}>
        <Link to={'/search'} className={styles.link}>
          <Card title={'Search'} icon={SearchIcon} onClick={() => {}} />
        </Link>
        <Link to={'/profile'} className={styles.link}>
          <Card title={'Profile'} icon={ProfileIcon} onClick={() => {}} />
        </Link>
        <Card title={'Settings'} icon={SettingsIcon} onClick={() => {}} />
      </div>
    </div>
  );
};

export default General;
