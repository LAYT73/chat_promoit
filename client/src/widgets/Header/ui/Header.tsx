import React from 'react';
import styles from './Header.module.scss';
import { BlockContainer, CustomSelect } from '@/shared/ui';
import Navigation from './Navigation.tsx';
import { useI18N } from '@/app/i18n/i18n.ts';

const Header: React.FC = () => {
  const { lang, setLang } = useI18N();

  const handleLang = (value: string) => {
    if (value === 'ru' || value === 'en') {
      setLang(value);
    }
  };
  const options = [
    { value: 'ru', label: 'Русский' },
    { value: 'en', label: 'English' },
  ];
  return (
    <div className={styles.header}>
      <BlockContainer className={styles.container}>
        <Navigation />
        <CustomSelect
          options={options}
          onChange={handleLang}
          placeholder={lang === 'ru' ? 'Выберите язык' : 'Select language'}
        />
      </BlockContainer>
    </div>
  );
};

export default Header;
