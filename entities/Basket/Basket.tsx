import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { BasketDesktop } from './desktop';
import { BasketMobile } from './mobile';

export const Basket = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <BasketDesktop />;
  }

  return <BasketMobile />;
};
