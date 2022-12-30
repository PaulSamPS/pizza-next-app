import { IProduct, IProductServer } from '@types';

export const extractUserArray = (items: IProductServer[]): IProduct[] =>
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

export const extractUser = (product: IProductServer): IProduct => ({
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
