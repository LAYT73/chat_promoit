import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './../store/store';
import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated,
  );

  if (isAuthenticated) {
    return (
      <div className={styles.layout}>
        <aside className={styles.aside}>Aside content</aside>
        <main className={styles.main_content}>
          <Outlet />
        </main>
      </div>
    );
  }
  return <Outlet />;
};
