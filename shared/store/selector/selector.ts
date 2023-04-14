import { AppState } from '../store';

export const productState = (state: AppState) => state.products;
export const productModalState = (state: AppState) => state.productModal;
export const basketModalState = (state: AppState) => state.basketModal;
export const userState = (state: AppState) => state.user;
export const basketState = (state: AppState) => state.basket;
export const navState = (state: AppState) => state.nav;
