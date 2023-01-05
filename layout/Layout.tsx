import React from 'react';
import { Header } from '@templates';
import { Container } from '@components/Blocks';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    <Container>{children}</Container>
  </>
);
