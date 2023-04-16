import { BasketType } from '@shared/types/basket';

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

export interface OrdersInterface {
  products: BasketType[] | null;
  info: OrderInfo;
  status: string;
  orderNumber: string;
  totalPrice: number;
  date: Date;
}
