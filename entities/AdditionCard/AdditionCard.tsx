import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { useScrollAdditions } from '@hooks';
import { AdditionsList } from '@entities';
import { AdditionsType } from '@types';
import { AdditionCardDesktop } from './desktop';
import { AdditionCardMobile } from './mobile';

type AdditionCardProps = {
  arr: AdditionsType[];
};

export const AdditionCard = ({ arr }: AdditionCardProps) => {
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
        {arr.map((addition) =>
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
      {arr.map((addition) =>
        (isDesktop ? (
          <AdditionCardMobile
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
};
