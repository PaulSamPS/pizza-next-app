import { IPizzaServer, IProductServer } from './product';

export type BasketProductType = {
  _id?: string;
  product: IProductServer;
  qty: number;
  price: number;
};

export type BasketPizzaType = {
  _id?: string;
  pizza: IPizzaServer;
  qty: number;
  size: string;
  dough: string;
  price: number;
};
export type BasketType = {
  _id: string;
  products: [BasketProductType & BasketPizzaType];
  totalPrice: number;
  totalCount: number;
};
