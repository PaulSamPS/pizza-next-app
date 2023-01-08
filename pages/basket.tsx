import React from 'react';
import { withLayout } from '@hoc';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { product } from '@packages/http/getProducts';
import { wrapper } from '../store/store';
import { setProducts } from '../store/slices/products.slice';
import { Basket } from '../entities/Basket/Basket';

const BasketPage = () => <Basket />;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req }) => {
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const products = await product();

    if (products) {
      dispatch(setProducts(products));
    }

    return {
      props: { isDesktop },
    };
  });

export default withLayout(BasketPage);
