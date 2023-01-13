import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { ProductCardInterface } from './interface';
import { ProductCardDesktop } from './desktop';
import { ProductCardMobile } from './mobile';

export const ProductCard = ({
  img,
  badge,
  type,
  pathname,
  price,
  name,
  description,
  inCart,
}: ProductCardInterface) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <ProductCardDesktop
        badge={badge}
        name={name}
        img={img}
        description={description}
        type={type}
        price={price}
        pathname={pathname}
        inCart={inCart}
      />
    );
  }

  return (
    <ProductCardMobile
      badge={badge}
      name={name}
      img={img}
      description={description}
      type={type}
      price={price}
      pathname={pathname}
      inCart={inCart}
    />
  );
};
