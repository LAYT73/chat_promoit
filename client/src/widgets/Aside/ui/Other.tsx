import React from 'react';
import { Link } from 'react-router-dom';

import { useTranslate } from '@/app/i18n/i18n.ts';
import MessageIcon from '@/assets/icons/message-icon.svg';
import FriendsIcon from '@/assets/icons/users-icon.svg';
import { Paragraph } from '@/shared/ui';
import Card from '@/widgets/Aside/ui/Card.tsx';

import styles from './Other.module.scss';

const Other: React.FC = () => {
  const translate = useTranslate();
  return (
    <div className={styles.other}>
      <Paragraph size={'small'} styleParagraph={styles.title}>
        {translate('other')}
      </Paragraph>
      <div className={styles.content}>
        <Link to={'/friends'} className={styles.link}>
          <Card
            title={translate('friends')}
            icon={FriendsIcon}
            onClick={() => {}}
          />
        </Link>
        <Link to={'/chats'} className={styles.link}>
          <Card
            title={translate('chats')}
            icon={MessageIcon}
            onClick={() => {}}
          />
        </Link>
      </div>
    </div>
  );
};

export default Other;
