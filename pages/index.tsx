import { Container } from '@components';
import React from 'react';
import { Category } from '@entities/Category';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';

function Home() {
  return (
    <Container>
      <Category />
    </Container>
  );
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];

  const { isDesktop } = getSelectorsByUserAgent(userAgent!);
  return {
    props: { isDesktop },
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HomeProps extends Record<string, unknown> {
  isDesktop: boolean;
}
