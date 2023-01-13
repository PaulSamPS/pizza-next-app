import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Main } from '@templates';
import * as getProduct from '@packages/http/getProducts';
import {
  setPizzaModal,
  setProductModal,
} from '../store/slices/productModal.slice';
import { wrapper } from '../store/store';
import { setPizzas, setProducts } from '../store/slices/products.slice';

function Home() {
  return <Main />;
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, query }) => {
    const queryName = Object.keys(query)[0];
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const pizzas = await getProduct.getAllPizzas();
    const products = await getProduct.getAllProducts();
    const productModal = await getProduct.getOneProduct(query[`${queryName}`]);
    const pizzaModal = await getProduct.getOnePizza(query[`${queryName}`]);

    if (pizzas) {
      dispatch(setPizzas(pizzas));
    }

    if (products) {
      dispatch(setProducts(products));
    }

    dispatch(setPizzaModal(pizzaModal));
    dispatch(setProductModal(productModal));

    return {
      props: { isDesktop },
    };
  });

export default withLayout(Home);
