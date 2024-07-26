import React from 'react';
import styles from './Aside.module.scss';
import { BlockContainer, Card, Paragraph } from '@/shared/ui';
import Avatar from '@/assets/images/AvatarTest.png';
import Exit from '@/assets/icons/exit-user.svg';
import { getUserProfileFromLocalStorage } from '@/shared/lib/localStorage/localStorage.ts';
import { useLogout, useNotification } from '@/shared/hooks';
import TextLogo from '@/assets/images/logoText.svg';
import General from '@/widgets/Aside/ui/General.tsx';
import Other from '@/widgets/Aside/ui/Other.tsx';
import { Link } from 'react-router-dom';
const Aside: React.FC = () => {
  const user = getUserProfileFromLocalStorage();
  const { logout, loading } = useLogout();
  const { addNotification } = useNotification();
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
          <Link to={'/home'} className={styles.link}>
            <img src={TextLogo} alt={'Logo'} className={styles.logo} />
          </Link>
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
