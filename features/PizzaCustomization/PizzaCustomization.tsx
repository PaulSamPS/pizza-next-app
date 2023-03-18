import React from 'react';
import { DeviceContext } from '@shared/context';
import { IPizzaLocal } from '@shared/types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import { useRouter } from 'next/router';
import { PizzaCustomizationDesktop } from './desktop';
import { PizzaCustomizationMobile } from './mobile';
import { useModalPizzaCustomization } from './hooks';

type ProductCustomizationProps = {
  pizza: IPizzaLocal;
};

export const PizzaCustomization = ({ pizza }: ProductCustomizationProps) => {
  const { isDesktop } = React.useContext(DeviceContext);
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
        dough={dough}
        setDough={setDough}
        currentWeight={currentWeight}
        sizeIndex={sizeIndex}
        setPizzaSize={setPizzaSize}
        pizzaSize={pizzaSize}
        currentSize={currentSize}
      />
    );
  }

  return (
    <PizzaCustomizationMobile
      pizza={pizza}
      additions={additions}
      navigateToMain={() => router.push('/')}
      dough={dough}
      setDough={setDough}
      currentWeight={currentWeight}
      sizeIndex={sizeIndex}
      setPizzaSize={setPizzaSize}
      pizzaSize={pizzaSize}
    />
  );
};
