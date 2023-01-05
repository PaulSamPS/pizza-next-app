import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { oneProduct, product } from '@packages/http/getProducts';
import { Main } from '@templates';
import { setProductModal } from '../store/slices/productModal.slice';
import { wrapper } from '../store/store';
import { setProducts } from '../store/slices/products.slice';

function Home() {
  return <Main />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, query }) => {
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const products = await product();
    const productModal = await oneProduct(query.pizza);

    if (products) {
      dispatch(setProducts(products));
    }

    dispatch(setProductModal(productModal));

    return {
      props: { isDesktop, products },
    };
  });

export default withLayout(Home);
