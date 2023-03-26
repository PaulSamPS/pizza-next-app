import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Error401Page } from '@widgets';

const Error401 = () => <Error401Page />;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];
  const { isDesktop } = getSelectorsByUserAgent(userAgent!);

  return {
    props: { isDesktop },
  };
};

export default Error401;
