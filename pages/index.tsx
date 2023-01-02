import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Header } from '@templates';
import { Category, ProductCard } from '@entities';
import { Container } from '@components/Blocks';
import { IProduct } from '@types';
import { oneProduct, product } from '@packages/http/getProducts';
import { setProductModal } from '../store/slices/product.slice';
import { wrapper } from '../store/store';

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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ req, query }) => {
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const products = await product();
    const productModal = await oneProduct(query.pizza);
    store.dispatch(setProductModal(productModal));

    return {
      props: { isDesktop, products },
    };
  });

interface HomeProps extends Record<string, unknown> {
  // eslint-disable-next-line react/no-unused-prop-types
  isDesktop: boolean;
  products: IProduct[];
}
