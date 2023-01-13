import React from 'react';
import { DeviceContext } from '@context';
import { IPizzaLocal } from '@types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import { useRouter } from 'next/router';
import { useScrollAdditions } from '@hooks';
import { PizzaCustomizationDesktop } from './desktop';
import { PizzaCustomizationMobile } from './mobile';
import { useModalPizzaCustomization } from './hooks';

type ProductCustomizationProps = {
  pizza: IPizzaLocal;
};

export const PizzaCustomization = ({ pizza }: ProductCustomizationProps) => {
  const { isDesktop } = React.useContext(DeviceContext);
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const {
    setPizzaSize,
    currentWeight,
    setDough,
    pizzaSize,
    dough,
    sizeIndex,
    currentSize,
  } = useModalPizzaCustomization({
    weight: pizza.weight,
  });
  const additions = additionAdapter();
  const router = useRouter();

  if (isDesktop) {
    return (
      <PizzaCustomizationDesktop
        pizza={pizza}
        additions={additions}
        canScrollRight={canScrollRight}
        scrollContainerBy={scrollContainerBy}
        containerRef={containerRef}
        canScrollLeft={canScrollLeft}
        dough={dough}
        setDough={setDough}
        currentWeight={currentWeight}
        sizeIndex={sizeIndex}
        setPizzaSize={setPizzaSize}
        pizzaSize={pizzaSize}
        currentSize={currentSize}
        isDesktop={isDesktop}
      />
    );
  }

  return (
    <PizzaCustomizationMobile
      pizza={pizza}
      additions={additions}
      navigateToMain={() => router.push('/')}
      canScrollRight={canScrollRight}
      scrollContainerBy={scrollContainerBy}
      containerRef={containerRef}
      canScrollLeft={canScrollLeft}
      dough={dough}
      setDough={setDough}
      currentWeight={currentWeight}
      sizeIndex={sizeIndex}
      setPizzaSize={setPizzaSize}
      pizzaSize={pizzaSize}
      isDesktop={isDesktop}
    />
  );
};
