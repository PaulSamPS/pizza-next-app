import { configureStore, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import productModal from './slices/productModal.slice';
import products from './slices/products.slice';
import basketModal from './slices/basketModal.slice';

export function makeStore() {
  return configureStore({
    reducer: {
      productModal,
      products,
      basketModal,
    },
  });
}

type Store = ReturnType<typeof makeStore>;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = Store['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
