import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Container } from '@components/Blocks';
import {ProductCard} from '@entities';
import {AdditionalCard} from "../entities/AdditionalCard";

function Home() {
  return (
    <>
      <Container>
        <ProductCard/>
        <AdditionalCard/>
        <AdditionalCard description/>
      </Container>
    </>
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
