import React from 'react';
import { withLayout, withAuth } from '@hoc';
import { PersonalTemplate } from '@templates';
import { GetServerSideProps } from 'next';
import { wrapper } from '@store/store';
import { getSelectorsByUserAgent } from 'react-device-detect';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import { setUser } from '@store/slices/user.slice';
import jwtDecode from 'jwt-decode';

const Personal = () => <PersonalTemplate />;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(({ dispatch }) => async ({ req, res }) => {
    const userAgent = req.headers['user-agent'];
    const { isDesktop } = getSelectorsByUserAgent(userAgent!);
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
    return {
      props: { isDesktop },
    };
  });

export default withLayout(withAuth(Personal));
