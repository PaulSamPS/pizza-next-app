import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { OrderBasket } from '@shared/types';
import { OrderCardDesktop } from './desktop';
import { OrderCardMobile } from './mobile';

interface OrderCardProps {
  order: OrderBasket;
}
export const OrderCard = ({ order }: OrderCardProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return <OrderCardDesktop order={order} />;
  }

  return <OrderCardMobile order={order} />;
};
