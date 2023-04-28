import { OneOrder, OrderBasket } from '@shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: OneOrder = {
  order: {} as OrderBasket,
};
export const oneOrderReducer = createSlice({
  name: 'oneOrder',
  initialState,
  reducers: {
    setSuccessOneOrder(state, action: PayloadAction<OrderBasket>) {
      state.order = action.payload;
    },
  },
});

export const { setSuccessOneOrder } = oneOrderReducer.actions;

export default oneOrderReducer.reducer;
