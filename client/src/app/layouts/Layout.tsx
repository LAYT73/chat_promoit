import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../store/store';
import styles from './Layout.module.scss';
import { Aside } from '@/widgets';

export const Layout: React.FC = () => {
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );

  if (isAuthenticated) {
    return (
      <div className={styles.layout}>
        <Aside />
        <main className={styles.main_content}>
          <Outlet />
        </main>
      </div>
    );
  }
  return <Outlet />;
};
