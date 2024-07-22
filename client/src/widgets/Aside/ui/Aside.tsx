import React, { useContext } from 'react';
import styles from './Aside.module.scss';
import { BlockContainer, Card, Paragraph } from '@/shared/ui';
import { NotificationContext } from '@/shared/lib/notifications/context/NotificationContext.tsx';
import Avatar from '@/assets/images/AvatarTest.png';
import Exit from '@/assets/icons/exit-user.svg';
import { getUserProfileFromLocalStorage } from '@/shared/lib/localStorage/localStorage.ts';
import { useLogout } from '@/shared/hooks';
import TextLogo from '@/assets/images/logoText.svg';
import General from '@/widgets/Aside/ui/General.tsx';
import Other from '@/widgets/Aside/ui/Other.tsx';
const Aside: React.FC = () => {
  const user = getUserProfileFromLocalStorage();
  const { logout, loading } = useLogout();
  const { addNotification } = useContext(NotificationContext);
  const copyText = () => {
    if (user) {
      navigator.clipboard.writeText(`${user.username}#${user.id}`);
      addNotification('Username copied to clipboard!', 3000, 'info');
    }
  };
  return (
    user && (
      <div className={styles.container}>
        <BlockContainer className={styles.aside}>
          <img src={TextLogo} alt={'Logo'} className={styles.logo} />
          <hr />
          <General />
          <hr />
          <Other />
          <Card className={styles.profile}>
            <div className={styles.avatar}>
              <img className={styles.avatarImg} src={Avatar} alt={'Avatar'} />
              <div className={styles.avatarInfo} />
            </div>
            <Paragraph
              styleParagraph={styles.profileText}
              onClick={() => copyText()}
            >
              {user.username}
              <span>#{user.id}</span>
            </Paragraph>
            <button className={styles.exit} onClick={logout} disabled={loading}>
              <img className={styles.exitIcon} src={Exit} alt={'Exit'} />
            </button>
          </Card>
        </BlockContainer>
      </div>
    )
  );
};

export default Aside;
