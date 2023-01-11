import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '@types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductModal = {
  products: IProduct[];
  allItems: IProduct[];
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: ProductModal = {
  products: [],
  isLoading: false,
  error: null,
  allItems: [],
};

const products = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<IProduct[]>) {
      state.products = action.payload;
    },
    setProducts(state, action: PayloadAction<IProduct[]>) {
      state.allItems = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.products.products) {
        state.products = action.payload.products.products;
      }
      if (action.payload.products.allItems) {
        state.allItems = action.payload.products.allItems;
      }
    },
  },
});

export const { setPizzas, setProducts } = products.actions;

export default products.reducer;
