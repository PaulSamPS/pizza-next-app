import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { useScrollAdditions } from '@hooks';
import { AdditionsList } from '@entities';
import { AdditionsType } from '@types';
import { AdditionCardDesktop } from './desktop';
import { AdditionCardMobile } from './mobile';

type AdditionCardProps = {
  add: AdditionsType[];
};

export const AdditionCard = ({ add }: AdditionCardProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();

  if (isDesktop) {
    return (
      <AdditionsList
        canScrollLeft={canScrollLeft}
        canScrollRight={canScrollRight}
        containerRef={containerRef}
        scrollContainerBy={scrollContainerBy}
        distance={310}
        isDesktop={isDesktop}
      >
        {add.map((addition) =>
          (isDesktop ? (
            <AdditionCardDesktop
              key={addition.id}
              name={addition.name}
              img={addition.img}
              price={addition.price}
            />
          ) : (
            <AdditionCardMobile
              key={addition.id}
              name={addition.name}
              img={addition.img}
              price={addition.price}
            />
          )))}
      </AdditionsList>
    );
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
      {add.map((addition) =>
        (isDesktop ? (
          <AdditionCardMobile
            name={addition.name}
            img={addition.img}
            price={addition.price}
          />
        ) : (
          <AdditionCardMobile
            name={addition.name}
            img={addition.img}
            price={addition.price}
          />
        )))}
    </AdditionsList>
  );
};
