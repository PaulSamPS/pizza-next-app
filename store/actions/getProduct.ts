import { createAsyncThunk } from '@reduxjs/toolkit';
import { oneProduct } from '@packages/http/getProducts';

export const getProductModal = createAsyncThunk(
  'profile',
  async (id: string, { rejectWithValue }) => {
    try {
      return await oneProduct(id);
    } catch (err) {
      return rejectWithValue('Ошибка загрузки профиля...');
    }
  }
);
