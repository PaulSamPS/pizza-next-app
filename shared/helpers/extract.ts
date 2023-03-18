import {
  IPizzaLocal,
  IPizzaServer,
  IProductLocal,
  IProductServer,
} from '@shared/types';

export const extractPizzaArray = (items: IPizzaServer[]): IPizzaLocal[] =>
  items.map((product) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: product._id,
    badge: product.badge,
    name: product.name,
    description: product.description,
    price: product.price,
    img: product.img,
    promotion: product.promotion,
    pathname: product.pathname,
    weight: product.weight,
    size: product.size,
    dough: product.dough,
    type: product.type,
  }));

export const extractPizza = (product: IPizzaServer): IPizzaLocal => ({
  // eslint-disable-next-line no-underscore-dangle
  id: product._id,
  badge: product.badge,
  name: product.name,
  description: product.description,
  price: product.price,
  img: product.img,
  promotion: product.promotion,
  pathname: product.pathname,
  weight: product.weight,
  size: product.size,
  dough: product.dough,
  type: product.type,
});

export const extractProductArray = (items: IProductServer[]): IProductLocal[] =>
  items.map((product) => ({
    // eslint-disable-next-line no-underscore-dangle
    id: product._id,
    badge: product.badge,
    name: product.name,
    description: product.description,
    price: product.price,
    img: product.img,
    promotion: product.promotion,
    pathname: product.pathname,
    weight: product.weight,
    type: product.type,
  }));

export const extractProduct = (product: IProductServer): IProductLocal => ({
  // eslint-disable-next-line no-underscore-dangle
  id: product._id,
  badge: product.badge,
  name: product.name,
  description: product.description,
  price: product.price,
  img: product.img,
  promotion: product.promotion,
  pathname: product.pathname,
  weight: product.weight,
  type: product.type,
});
