import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { ProductCardModalDesktop } from './desktop';
import { ProductCardModalMobile } from './mobile';
import { ProductCardModalProps } from './interface';

export const ProductCardModal = ({
  img,
  weight,
  promotion,
  name,
  price,
  description,
}: ProductCardModalProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <ProductCardModalDesktop
        name={name}
        img={img}
        price={price}
        description={description}
        weight={weight}
        promotion={promotion}
      />
    );
  }

  return (
    <ProductCardModalMobile
      name={name}
      img={img}
      price={price}
      description={description}
      weight={weight}
      promotion={promotion}
    />
  );
};
