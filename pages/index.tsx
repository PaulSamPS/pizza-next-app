import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Main } from '@templates';
import * as productsFactory from '@packages/getProductFactory';
import { setProductModal } from '../store/slices/productModal.slice';
import { wrapper } from '../store/store';
import { setPizzas, setProducts } from '../store/slices/products.slice';

function Home() {
  return <Main />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, query }) => {
    const queryName = 'pizza' || 'snack';
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const pizzas = await productsFactory.getAllPizzas();
    const products = await productsFactory.getAllProducts();
    const productModal = await productsFactory.getOneProduct(
      query[`${queryName}`]
    );

    if (pizzas) {
      dispatch(setPizzas(pizzas));
    }

    if (products) {
      dispatch(setProducts(products));
    }

    dispatch(setProductModal(productModal));

    return {
      props: { isDesktop },
    };
  });

export default withLayout(Home);
