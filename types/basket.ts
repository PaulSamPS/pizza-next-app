import { IPizzaServer, IProductServer } from './product';

export type BasketProductType = {
  product: IProductServer;
  qty: number;
};

export type BasketPizzaType = {
  pizza: IPizzaServer;
  qty: number;
  size: string;
  dough: string;
};
export type BasketType = {
  _id: string;
  products: [BasketProductType & BasketPizzaType];
  totalPrice: number;
};
