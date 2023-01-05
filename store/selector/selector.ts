import { AppState } from '../store';

export const productState = (state: AppState) => state.products;
export const productModalState = (state: AppState) => state.productModal;
export const basketModalState = (state: AppState) => state.basketModal;
