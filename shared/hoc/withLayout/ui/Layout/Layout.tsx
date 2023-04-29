import React, { useContext } from 'react';
import { BasketModal, Footer, Header, Nav } from '@entities';
import { DeviceContext } from '@shared/context';
import styles from './Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <Header />
        <Nav />
        {children}
        <BasketModal />
      </div>
      {isDesktop && (
        <div className={styles.footer}>
          <Footer />
        </div>
      )}
    </div>
  );
};
