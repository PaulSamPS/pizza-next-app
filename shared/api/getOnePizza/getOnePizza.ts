import { IPizzaLocal } from '@shared/types';
import axios from 'axios';
import { extractPizza } from '@shared/helpers';

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
