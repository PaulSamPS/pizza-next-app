import { IProductLocal } from '@types';

export const snack = (items: IProductLocal[]): IProductLocal[] =>
  items.filter((i) => i.type === 'snack');

export const drink = (items: IProductLocal[]): IProductLocal[] =>
  items.filter((i) => i.type === 'drink');
