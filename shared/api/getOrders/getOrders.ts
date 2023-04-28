import { AppDispatch } from '@shared/store/store';
import { orderReducer } from '@shared/store/slices/order.slice';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { OrderBasket, OrdersUser } from '@shared/types';
import { oneOrderReducer } from '@shared/store/slices/oneOrder.slice';

export const getOrders = (userId: string) => async (dispatch: AppDispatch) => {
  await axios
    .get(`${process.env.API_URL}/order/${userId}`, { withCredentials: true })
    .then((res: AxiosResponse<OrdersUser>) => {
      dispatch(orderReducer.actions.setSuccessOrders(res.data));
    })
    .catch((e: AxiosError<{ message: string }>) => {
      console.log(e);
    });
};

export const getOneOrder =
  (orderId: string | string[] | undefined, userId: string) =>
  async (dispatch: AppDispatch) => {
    await axios
      .post(
        `${process.env.API_URL}/order/history/${orderId}`,
        { userId },
        { withCredentials: true }
      )
      .then((res: AxiosResponse<OrderBasket>) => {
        dispatch(oneOrderReducer.actions.setSuccessOneOrder(res.data));
      })
      .catch((e: AxiosError<{ message: string }>) => {
        console.log(e);
      });
  };
