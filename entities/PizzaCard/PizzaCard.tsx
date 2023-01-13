import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { PizzaCardDesktop } from './desktop';
import { PizzaCardInterface } from './interface';
import { PizzaCardMobile } from './mobile';

export const PizzaCard = ({
  price,
  type,
  name,
  img,
  description,
  badge,
  pathname,
}: PizzaCardInterface) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <PizzaCardDesktop
        badge={badge}
        name={name}
        img={img}
        description={description}
        type={type}
        price={price}
        pathname={pathname}
      />
    );
  }

  return (
    <PizzaCardMobile
      badge={badge}
      name={name}
      img={img}
      description={description}
      type={type}
      price={price}
      pathname={pathname}
    />
  );
};
