import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type BasketModal = {
  basketModalIsOpened: boolean;
};

const initialState: BasketModal = {
  basketModalIsOpened: false,
};

const basketModal = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setBasketModalIsOpened(state, action: PayloadAction<boolean>) {
      state.basketModalIsOpened = action.payload;
    },
  },
});

export const { setBasketModalIsOpened } = basketModal.actions;

export default basketModal.reducer;
