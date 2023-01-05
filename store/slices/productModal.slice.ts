import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductModal = {
  product: IProduct | null;
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: ProductModal = {
  product: {} as IProduct,
  isLoading: false,
  error: null,
};

const productModal = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProductModal(state, action: PayloadAction<IProduct | null>) {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.productModal.product) {
        state.product = action.payload.productModal.product;
      }
    },
  },
});

export const { setProductModal } = productModal.actions;

export default productModal.reducer;
