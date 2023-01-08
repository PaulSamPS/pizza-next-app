import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { BasketDesktop } from './BasketDesktop';
import { BasketMobile } from './BasketMobile';

export const Basket = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <BasketDesktop />;
  }

  return <BasketMobile />;
};
