import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductModal = {
  products: IProduct[];
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: ProductModal = {
  products: [],
  isLoading: false,
  error: null,
};

const products = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.products.products) {
        state.products = action.payload.products.products;
      }
    },
  },
});

export const { setProducts } = products.actions;

export default products.reducer;
