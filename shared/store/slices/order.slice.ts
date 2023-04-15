import { BasketType } from '@shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OrderInfo {
  howSoon: string;
  payment: string;
  change: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  house: string;
  entrance: string;
  level: string;
  apartment: string;
  intercom: string;
}

interface OrderBasket {
  products: BasketType[] | null;
  info: OrderInfo;
  status: string;
  orderNumber: string;
  totalPrice: number;
}

export interface OrdersUser {
  orders: OrderBasket[];
  date: Date | null;
}

const initialState: OrdersUser = {
  orders: [],
  date: null,
};
export const orderReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setSuccessOrders(state, action: PayloadAction<OrdersUser>) {
      state.orders = action.payload.orders;
      state.date = action.payload.date;
    },
  },
});

export const { setSuccessOrders } = orderReducer.actions;

export default orderReducer.reducer;
