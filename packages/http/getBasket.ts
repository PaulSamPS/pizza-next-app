import { BasketType } from '@types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { basketReducer } from '@store/slices/basket.slice';
import { AppDispatch } from '@store/store';

// export const getBasket = async (): Promise<BasketType | null> => {
//   try {
//     const res = await axios.get<BasketType>(
//       `${process.env.API_URL}/basket/get`,
//       { withCredentials: true }
//     );
//     return res.data;
//   } catch (e) {
//     return null;
//   }
// };

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
