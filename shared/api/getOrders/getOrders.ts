import { AppDispatch } from '@shared/store/store';
import { orderReducer, OrdersUser } from '@shared/store/slices/order.slice';
import axios, { AxiosError, AxiosResponse } from 'axios';

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
