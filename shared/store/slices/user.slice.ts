import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '@shared/types';
import { HYDRATE } from 'next-redux-wrapper';

type ProductModal = {
  user: IUser;
};

const initialState: ProductModal = {
  user: {} as IUser,
};

const user = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      if (action.payload.user.user) {
        state.user = action.payload.user.user;
      }
    },
  },
});

export const { setUser } = user.actions;

export default user.reducer;
