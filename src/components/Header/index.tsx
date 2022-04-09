import { Outlet } from 'react-router-dom';
import styles from './Header.module.scss';
import stylesTheme from 'styles/Theme.module.scss';
import React from 'react';

export default function Header({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
        {children}
      </div>
    </>
  );
}
