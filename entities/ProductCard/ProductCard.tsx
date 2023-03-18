import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { ProductCardInterface } from './interface';
import { ProductCardDesktop } from './desktop';
import { ProductCardMobile } from './mobile';

export const ProductCard = ({ item }: ProductCardInterface) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <ProductCardDesktop item={item} />;
  }

  return <ProductCardMobile item={item} />;
};
