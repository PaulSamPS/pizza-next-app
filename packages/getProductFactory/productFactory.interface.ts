import { IProductServer } from '@types';

export interface ProductFactoryInterface {
  get: () => Promise<IProductServer | null>;
}
