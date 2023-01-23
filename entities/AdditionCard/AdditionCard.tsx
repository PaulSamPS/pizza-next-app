import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { AdditionsType } from '@types';
import { AdditionCardDesktop } from './desktop';
import { AdditionCardMobile } from './mobile';

type AdditionCardProps = {
  addition: AdditionsType;
};

export const AdditionCard = ({ addition }: AdditionCardProps) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <AdditionCardDesktop
        key={addition.id}
        name={addition.name}
        img={addition.img}
        price={addition.price}
      />
    );
  }
  return (
    <AdditionCardMobile
      key={addition.id}
      name={addition.name}
      img={addition.img}
      price={addition.price}
    />
  );
};
