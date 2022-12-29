import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Header } from '@templates';
import { Category, ProductCard } from '@entities';
import { Container } from '@components/Blocks';
import { productAdapter } from '@packages/adapter/productAdapter';
import { IProduct } from '@types';

function Home({ products }: HomeProps) {
  return (
    <>
      <Header product={products} />
      <Category />
      <Container>
        <ProductCard products={products} />
      </Container>
    </>
  );
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];
  const products = productAdapter();

  const { isDesktop } = getSelectorsByUserAgent(userAgent!);
  return {
    props: { isDesktop, products },
  };
};

interface HomeProps extends Record<string, unknown> {
  // eslint-disable-next-line react/no-unused-prop-types
  isDesktop: boolean;
  products: IProduct[];
}
