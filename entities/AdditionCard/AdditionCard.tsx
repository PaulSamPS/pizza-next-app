import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { AdditionsType } from '@shared/types';
import { AdditionCardDesktop } from './ui/desktop';
import { AdditionCardMobile } from './ui/mobile';

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
