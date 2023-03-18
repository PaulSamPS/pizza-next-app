import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzaLocal, IProductLocal } from '@shared/types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductModal = {
  product: IProductLocal | null;
  pizza: IPizzaLocal | null;
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: ProductModal = {
  product: {} as IProductLocal,
  pizza: {} as IPizzaLocal,
  isLoading: false,
  error: null,
};

const productModal = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProductModal(state, action: PayloadAction<IProductLocal | null>) {
      state.product = action.payload;
    },
    setPizzaModal(state, action: PayloadAction<IPizzaLocal | null>) {
      state.pizza = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.productModal.product) {
        state.product = action.payload.productModal.product;
      }
      if (action.payload.productModal.pizza) {
        state.pizza = action.payload.productModal.pizza;
      }
    },
  },
});

export const { setProductModal, setPizzaModal } = productModal.actions;

export default productModal.reducer;
