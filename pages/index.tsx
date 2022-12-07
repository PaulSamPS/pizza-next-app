import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Header } from '@templates/Header';
import { Container, Divider, WhiteBlock } from '@components';
import { SubHeader } from '@templates/SubHeader/SubHeader';

function Home() {
  return (
    <WhiteBlock>
      <Container>
        <Header />
      </Container>
      <Divider />
      <WhiteBlock>
        <Container>
          <SubHeader />
        </Container>
      </WhiteBlock>
    </WhiteBlock>
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
