import React from 'react';
import { withLayout, withAuth } from '@shared/hoc';
import { Cabinet } from '@widgets';
import { GetServerSideProps } from 'next';
import { wrapper } from '@shared/store/store';
import { getSelectorsByUserAgent } from 'react-device-detect';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { setUser } from '@shared/store/slices/user.slice';
import jwtDecode from 'jwt-decode';
import * as getProduct from '@packages/http/getProducts';
import { setProducts } from '@shared/store/slices/products.slice';

const CabinetPage = () => <Cabinet />;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, res }) => {
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
    const products = await getProduct.getAllProducts();
    const cookie = req.cookies.accessToken || req.cookies.refreshToken;

    if (cookie) {
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
          });
          dispatch(setUser(jwtDecode(response.data.token)));
        });
      // .catch((e: AxiosError<{ message: string }>) => {
      //   console.log(e.response?.data.message!);
      // });
    }
    if (products) {
      dispatch(setProducts(products));
    }
    return {
      props: { isDesktop },
    };
  });

export default withLayout(withAuth(CabinetPage));
