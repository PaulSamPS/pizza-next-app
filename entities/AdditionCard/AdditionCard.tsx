import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { useScrollAdditions } from '@hooks';
import { AdditionCardDesktop } from './AdditionCardDesktop';
import { AdditionCardMobile } from './AdditionCardMobile';
import { AdditionsList } from '../AddionList/AdditionsList';
import { AdditionsType } from '../../types/additions';

type AdditionCardProps = {
  add: AdditionsType[];
};

export const AdditionCard = ({ add }: AdditionCardProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();

  if (isDesktop) {
    return <AdditionCardDesktop />;
  }

  return (
    <AdditionsList
      canScrollLeft={canScrollLeft}
      canScrollRight={canScrollRight}
      containerRef={containerRef}
      scrollContainerBy={scrollContainerBy}
      distance={310}
      isDesktop={isDesktop}
    >
      {add.map((addition) => (
        <AdditionCardMobile
          name={addition.name}
          img={addition.img}
          price={addition.price}
        />
      ))}
    </AdditionsList>
  );
};
