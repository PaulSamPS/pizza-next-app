import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { OrderCardDesktop } from './desktop';
import { OrderCardMobile } from './mobile';

export const OrderCard = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <OrderCardDesktop />;
  }

  return <OrderCardMobile />;
};
