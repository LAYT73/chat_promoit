import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { RootState } from '@/app/store/store';
import { Aside, Header } from '@/widgets';

import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );

  if (isAuthenticated) {
    return (
      <div className={styles.layout}>
        <Aside />
        <main className={styles.main_content}>
          <Header />
          <Outlet />
        </main>
      </div>
    );
  }
  return <Outlet />;
};
