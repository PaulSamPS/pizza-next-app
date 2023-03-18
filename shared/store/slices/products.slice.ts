import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPizzaLocal, IProductLocal } from '@shared/types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductModal = {
  pizza: IPizzaLocal[];
  items: IProductLocal[];
  error: string | null | unknown;
  isLoading: boolean;
};

const initialState: ProductModal = {
  pizza: [],
  isLoading: false,
  error: null,
  items: [],
};

const products = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setPizzas(state, action: PayloadAction<IPizzaLocal[]>) {
      state.pizza = action.payload;
    },
    setProducts(state, action: PayloadAction<IProductLocal[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.products.pizza) {
        state.pizza = action.payload.products.pizza;
      }
      if (action.payload.products.items) {
        state.items = action.payload.products.items;
      }
    },
  },
});

export const { setPizzas, setProducts } = products.actions;

export default products.reducer;
