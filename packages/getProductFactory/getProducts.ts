import axios from 'axios';
import { extractUser, extractUserArray } from '@helpers/extract';

export const product = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/product');
    return extractUserArray(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  return null;
};

export const oneProduct = async (id: string | string[] | undefined) => {
  try {
    const res = await axios.get(`http://localhost:5000/api/product/${id}`);
    // eslint-disable-next-line no-console
    return extractUser(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    return null;
  }
};
