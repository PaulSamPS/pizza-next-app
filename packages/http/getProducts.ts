import {
  IPizzaLocal,
  IPizzaServer,
  IProductLocal,
  IProductServer,
} from '@types';
import axios from 'axios';
import {
  extractPizza,
  extractPizzaArray,
  extractProduct,
  extractProductArray,
} from '@helpers/extract';

export const getAllPizzas = async (): Promise<IPizzaLocal[] | null> => {
  try {
    const res = await axios.get<IPizzaServer[]>(
      'http://localhost:5000/api/product/pizza'
    );
    return extractPizzaArray(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  return null;
};

export const getOnePizza = async (
  name: string | string[] | undefined
): Promise<IPizzaLocal | null> => {
  try {
    const res = await axios.get(
      `http://localhost:5000/api/product/pizza/${name}`
    );
    return extractPizza(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  return null;
};

export const getAllProducts = async (): Promise<IProductLocal[] | null> => {
  try {
    const res = await axios.get<IProductServer[]>(
      'http://localhost:5000/api/product'
    );
    return extractProductArray(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
  return null;
};

export const getOneProduct = async (name: string | string[] | undefined) => {
  try {
    const res = await axios.get<IProductServer>(
      `http://localhost:5000/api/product/${name}`
    );
    // eslint-disable-next-line no-console
    return extractProduct(res.data);
  } catch (e) {
    // eslint-disable-next-line no-console
    return null;
  }
};
