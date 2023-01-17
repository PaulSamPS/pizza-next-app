import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { Auth } from '@templates';
import { Login } from '../entities/Header/components';

const Error401 = () => (
  <div>
    Не Авторизован
    <Login />
    <Auth />
  </div>
);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];
  const { isDesktop } = getSelectorsByUserAgent(userAgent!);

  return {
    props: { isDesktop },
  };
};

export default Error401;
