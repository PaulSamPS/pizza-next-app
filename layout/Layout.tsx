import React from 'react';
import { Header } from '@entities';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);
