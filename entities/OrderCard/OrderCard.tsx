import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { OrderCardDesktop } from './desktop';
import { OrderCardMobile } from './mobile';
import type { OrderCardProps } from './type';

export const OrderCard = ({ order, buttonText }: OrderCardProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <OrderCardDesktop order={order} />;
  }

  return <OrderCardMobile order={order} buttonText={buttonText} />;
};
