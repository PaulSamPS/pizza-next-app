import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { Main } from '@templates';
import * as getProduct from '@packages/http/getProducts';
import {
  setPizzaModal,
  setProductModal,
} from '@store/slices/productModal.slice';
import { wrapper } from '@store/store';
import { setPizzas, setProducts } from '@store/slices/products.slice';
import axios, { AxiosError } from 'axios';
import jwtDecode from 'jwt-decode';
import { setUser } from '@store/slices/user.slice';

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

    if (req.cookies.accessToken || req.cookies.refreshToken) {
      await axios
        .get(`${process.env.API_URL}/user`, {
          withCredentials: true,
          headers: {
            accessToken: req.cookies.accessToken,
            refreshToken: req.cookies.refreshToken,
          },
        })
        .then((res) => {
          dispatch(setUser(jwtDecode(res.data.token)));
        })
        .catch((e: AxiosError<{ message: string }>) => {
          console.log(e.response?.data.message!);
        });
    }

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
