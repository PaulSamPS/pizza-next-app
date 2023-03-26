import { IPizzaLocal, IPizzaServer } from '@shared/types';
import axios from 'axios';
import { extractPizzaArray } from '@shared/helpers';

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
