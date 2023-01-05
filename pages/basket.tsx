import React from 'react';
import { withLayout } from '@hoc';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';

const Basket = () => <div>basket</div>;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];
  const { isDesktop } = getSelectorsByUserAgent(userAgent!);

  return {
    props: { isDesktop },
  };
};
export default withLayout(Basket);
