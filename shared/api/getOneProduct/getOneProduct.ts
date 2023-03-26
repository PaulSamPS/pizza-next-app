import { IProductLocal, IProductServer } from '@shared/types';
import axios from 'axios';
import { extractProduct } from '@shared/helpers';

export const getOneProduct = async (
  name: string | string[] | undefined
): Promise<IProductLocal | null> => {
  try {
    const res = await axios.get<IProductServer>(
      `${process.env.API_URL}/product/${name}`
    );
    return extractProduct(res.data);
  } catch (e) {
    return null;
  }
};
