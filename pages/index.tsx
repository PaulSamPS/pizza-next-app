import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@shared/hoc';
import * as getProduct from '@packages/http/getProducts';
import {
  setPizzaModal,
  setProductModal,
} from '@shared/store/slices/productModal.slice';
import { wrapper } from '@shared/store/store';
import { setPizzas, setProducts } from '@shared/store/slices/products.slice';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setUser } from '@shared/store/slices/user.slice';
import { setCookie } from 'cookies-next';
import { Container } from '@shared/ui';
import { ProductCustomization, ProductList } from '@widgets';

const Home = () => (
    <Container>
      <ProductCustomization />
      <ProductList />
    </Container>
  )

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, res, query }) => {
    const queryName = Object.keys(query)[0];
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const pizzas = await getProduct.getAllPizzas();
    const products = await getProduct.getAllProducts();
    const productModal = await getProduct.getOneProduct(query[`${queryName}`]);
    const pizzaModal = await getProduct.getOnePizza(query[`${queryName}`]);

    if (req.cookies.accessToken || req.cookies.refreshToken) {
      await axios
        .get<{ token: string; exp: number }>(`${process.env.API_URL}/user`, {
          withCredentials: true,
          headers: {
            accessToken: req.cookies.accessToken,
            refreshToken: req.cookies.refreshToken,
          },
        })
        .then((response) => {
          setCookie('accessToken', response.data.token, {
            req,
            res,
            expires: new Date(response.data.exp * 1000),
            httpOnly: true,
            sameSite: 'none',
            secure: true,
          });
          dispatch(setUser(jwtDecode(response.data.token)));
        });
      // .catch((e: AxiosError<{ message: string }>) => {
      //   console.log(e.response?.data.message!);
      // });
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
