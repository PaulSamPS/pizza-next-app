import { OrdersUser } from '@shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: OrdersUser = {
  orders: [],
};
export const orderReducer = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setSuccessOrders(state, action: PayloadAction<OrdersUser>) {
      state.orders = action.payload.orders;
    },
  },
});

export const { setSuccessOrders } = orderReducer.actions;

export default orderReducer.reducer;
