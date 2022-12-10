import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';

export const ProductCard = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <ProductCardDesktop />;
  }
  return <ProductCardMobile />;
};
