import { IPizzaServer, IProductServer } from './product';

export const isPizza = (
  item: IPizzaServer | IProductServer
): item is IPizzaServer => 'size' in item;
