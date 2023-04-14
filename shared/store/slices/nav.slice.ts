import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Nav = {
  name: string;
};

const initialState: Nav = {
  name: '',
};

const nav = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setNavName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export const { setNavName } = nav.actions;

export default nav.reducer;
