import { FunctionComponent } from 'react';
import styles from '@/features/LoginForm/ui/Header.module.scss';
import { AnimatedText, Heading, Paragraph } from '@/shared/ui';
import { useTranslate } from '@/app/i18n/i18n.ts';

const Header: FunctionComponent = () => {
  const translate = useTranslate();
  return (
    <>
      <div className={styles.heading}>
        <Heading size={'h2'} fontStyle={'regular'}>
          <AnimatedText text={"Let's get"} />
        </Heading>
        <Heading size={'h2'} fontStyle={'bold'} style={styles.headingGradient}>
          creative!
        </Heading>
      </div>
      <Paragraph size={'large'} styleParagraph={styles.paragraph}>
        <AnimatedText text={translate('login_description')} />
      </Paragraph>
    </>
  );
};

export default Header;
