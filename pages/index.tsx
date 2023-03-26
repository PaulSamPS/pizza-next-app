import React from 'react';
import { withLayout } from '@shared/hoc';
import { Container } from '@shared/ui';
import { ProductCustomization, ProductList } from '@widgets';
import { BasketModal } from '@entities';
import { GetServerSideProps } from 'next';
import { wrapper } from '@shared/store/store';
import { getSelectorsByUserAgent } from 'react-device-detect';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { setUser } from '@shared/store/slices/user.slice';
import jwtDecode from 'jwt-decode';
import { setPizzas, setProducts } from '@shared/store/slices/products.slice';
import {
  setPizzaModal,
  setProductModal,
} from '@shared/store/slices/productModal.slice';
import {
  getAllPizzas,
  getOnePizza,
  getAllProducts,
  getOneProduct,
} from '@shared/api';

const Home = () => (
  <Container>
    <ProductCustomization />
    <ProductList />
    <BasketModal />
  </Container>
);

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, res, query }) => {
    const queryName = Object.keys(query)[0];
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const pizzas = await getAllPizzas();
    const products = await getAllProducts();
    const productModal = await getOneProduct(query[`${queryName}`]);
    const pizzaModal = await getOnePizza(query[`${queryName}`]);

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
