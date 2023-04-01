import { IPizzaServer, IProductServer } from '@shared/types/product';
import { BasketPizzaType } from '@shared/types/basket';
import React from 'react';

export type CheckoutProductProps = {
  children: React.ReactNode;
  size: 'small' | 'medium';
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
};
