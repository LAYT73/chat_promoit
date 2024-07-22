import React from 'react';
import styles from './Other.module.scss';
import { Paragraph } from '@/shared/ui';
import Card from '@/widgets/Aside/ui/Card.tsx';
import FriendsIcon from '@/assets/icons/users-icon.svg';
import MessageIcon from '@/assets/icons/message-icon.svg';
import { Link } from 'react-router-dom';

const Other: React.FC = () => {
  return (
    <div className={styles.other}>
      <Paragraph size={'small'} styleParagraph={styles.title}>
        OTHER
      </Paragraph>
      <div className={styles.content}>
        <Link to={'/friends'} className={styles.link}>
          <Card title={'Friends'} icon={FriendsIcon} onClick={() => {}} />
        </Link>
        <Link to={'/chats'} className={styles.link}>
          <Card title={'Chats'} icon={MessageIcon} onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default Other;
