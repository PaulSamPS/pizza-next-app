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
      `${process.env.API_URL}/product/pizza`
    );
    return extractPizzaArray(res.data);
  } catch (e) {
    return null;
  }
};

export const getOnePizza = async (
  name: string | string[] | undefined
): Promise<IPizzaLocal | null> => {
  try {
    const res = await axios.get(`${process.env.API_URL}/product/pizza/${name}`);
    return extractPizza(res.data);
  } catch (e) {
    return null;
  }
};

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
