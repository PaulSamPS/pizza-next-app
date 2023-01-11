import { IProduct } from '@types';
import axios from 'axios';
import { extractUser, extractUserArray } from '@helpers/extract';

export const getAllPizzas = async (): Promise<IProduct[] | null> => {
  try {
    const res = await axios.get('http://localhost:5000/api/product/pizza');
    return extractUserArray(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  return null;
};

export const getAllProducts = async (): Promise<any> => {
  try {
    const res = await axios.get('http://localhost:5000/api/product');
    return res.data;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  return null;
};

export const getOneProduct = async (name: string | string[] | undefined) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/product/${name}`);
    // eslint-disable-next-line no-console
    return extractUser(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    return null;
  }
};
