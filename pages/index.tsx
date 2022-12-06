import { Button, Container } from '@components';
import React from 'react';
import { Category } from '@entities/Category';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { ArrowBackIcon } from '@helpers/icons/18';

function Home() {
  return (
    <Container>
      <Category />
      <Button
        appearance='primary'
        before={<ArrowBackIcon />}
        width={48}
        height={48}
      />
      <Button appearance='primary' loading width={178}>
        Загрузка
      </Button>
      <Button appearance='primary' width={178}>
        Применить
      </Button>
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
