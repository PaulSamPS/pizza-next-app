import React from 'react';
import { Header, Nav } from '@entities';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Nav />
    {children}
  </>
);
