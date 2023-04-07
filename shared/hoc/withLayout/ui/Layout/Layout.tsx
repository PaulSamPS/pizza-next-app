import React from 'react';
import { Footer, Header, Nav } from '@entities';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <div className={styles.body}>
    <div className={styles.content}>
      <Header />
      <Nav />
      {children}
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </div>
);
