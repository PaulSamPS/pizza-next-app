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
  date: Date;
}

export interface OrdersUser {
  orders: OrderBasket[];
}

const initialState: OrdersUser = {
  orders: [],
};
export const orderReducer = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setSuccessOrders(state, action: PayloadAction<OrdersUser>) {
      state.orders = action.payload.orders;
    },
  },
});

export const { setSuccessOrders } = orderReducer.actions;

export default orderReducer.reducer;
