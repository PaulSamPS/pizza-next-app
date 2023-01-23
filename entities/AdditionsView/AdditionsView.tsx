import React, { useContext } from 'react';
import { AdditionsList } from '@entities';
import { useScrollAdditions } from '@hooks';
import { AdditionsType } from '@types';
import { DeviceContext } from '@context';
import { AdditionCard } from '../AdditionCard/AdditionCard';

type AdditionsViewProps = {
  arr: AdditionsType[];
  distance: number;
};

export const AdditionsView = ({ arr, distance }: AdditionsViewProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const { containerRef, scrollContainerBy, canScrollRight, canScrollLeft } =
    useScrollAdditions();
  return (
    <AdditionsList
      canScrollLeft={canScrollLeft}
      canScrollRight={canScrollRight}
      containerRef={containerRef}
      scrollContainerBy={scrollContainerBy}
      distance={distance}
      isDesktop={isDesktop}
    >
      {arr.map((a) => (
        <AdditionCard key={a.id} addition={a} />
      ))}
    </AdditionsList>
  );
};
