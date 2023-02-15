import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { OrderCardDesktop } from './OrderCardDesktop';
import { OrderCardMobile } from './OrderCardMobile';

export const OrderCard = () => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <OrderCardDesktop />;
  }

  return <OrderCardMobile />;
};
