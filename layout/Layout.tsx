import React from 'react';
import { Container } from '@components/Blocks';
import { Header } from '@entities';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);
