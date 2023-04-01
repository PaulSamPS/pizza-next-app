import { BasketPizzaType, IPizzaServer, IProductServer } from '@shared/types';

export type CountBasketProps = {
  height?: number;
  size: string;
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
  count: number | undefined;
};
