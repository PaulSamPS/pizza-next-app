import axios from 'axios';
import { extractUser, extractUserArray } from '@helpers/extract';

export const product = async () => {
  try {
    const res = await axios.get('http://localhost:5000/api/product');
    return extractUserArray(res.data);
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const oneProduct = async (pathname: string | string[] | undefined) => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/product/${pathname}`
    );
    console.log(res);
    return extractUser(res.data);
  } catch (e) {
    console.log(e);
  }
  return null;
};
