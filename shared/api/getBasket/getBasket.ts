import { BasketType } from '@shared/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { basketReducer } from '@shared/store/slices/basket.slice';
import { AppDispatch } from '@shared/store/store';

export const getBasket = () => async (dispatch: AppDispatch) => {
  dispatch(basketReducer.actions.setLoadingBasket());
  await axios
    .get(`${process.env.API_URL}/basket/get`, { withCredentials: true })
    .then((res: AxiosResponse<BasketType>) => {
      dispatch(basketReducer.actions.setSuccessBasket(res.data));
    })
    .catch((e: AxiosError<{ message: string }>) => {
      dispatch(basketReducer.actions.setErrorBaskets(e.response!.data.message));
    });
};
