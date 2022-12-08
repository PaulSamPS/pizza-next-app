import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { TemplateHeader } from '@templates/Header';
import { Container } from '@components/Blocks';
import { Select } from '@components/Form';
import { Category } from '@entities';

const a = ['first', 'second', 'third'];

function Home() {
  return (
    <>
      <TemplateHeader />
      <Container>
        <Category />
        <Select
          appearance='border'
          arr={a}
          editable
          placeholder='Выберите ресторан'
        />
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
