import { BasketPizzaType, BasketProductType } from '@shared/types/basket';

interface OrderInfo {
  howSoon: string;
  payment: string;
  change: string;
  name: string;
  email: string;
  phone: string;
  street: string;
  house: string;
  entrance: string;
  level: string;
  apartment: string;
  intercom: string;
}

export interface OrderBasket {
  products: [BasketProductType & BasketPizzaType];
  info: OrderInfo;
  status: string;
  orderNumber: string;
  totalPrice: number;
  date: Date;
  _id: string;
}

export interface OrdersUser {
  orders: OrderBasket[];
}

export interface OneOrder {
  order: OrderBasket;
}
