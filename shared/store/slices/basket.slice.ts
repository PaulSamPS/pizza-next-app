import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketType } from '@shared/types';
import { HYDRATE } from 'next-redux-wrapper';

interface IReduxBasket {
  basket: BasketType;
  isLoading: boolean;
  error: string;
}

const initialState: IReduxBasket = {
  isLoading: false,
  error: '',
  basket: {} as BasketType,
};
export const basketReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setLoadingBasket(state) {
      state.isLoading = true;
    },
    setSuccessBasket(state, action: PayloadAction<BasketType>) {
      state.isLoading = false;
      state.basket = action.payload;
    },
    setErrorBaskets(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    setClearBasket(state) {
      state.isLoading = false;
      state.basket = {} as BasketType;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.basket = action.payload.basket.basket;
    },
  },
});

export const { setSuccessBasket, setClearBasket } = basketReducer.actions;

export default basketReducer.reducer;
