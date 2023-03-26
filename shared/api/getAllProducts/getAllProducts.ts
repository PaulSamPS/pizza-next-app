import { IProductLocal, IProductServer } from '@shared/types';
import axios from 'axios';
import { extractProductArray } from '@shared/helpers';

export const getAllProducts = async (): Promise<IProductLocal[] | null> => {
  try {
    const res = await axios.get<IProductServer[]>(
      `${process.env.API_URL}/product`
    );
    return extractProductArray(res.data);
  } catch (e) {
    return null;
  }
};
