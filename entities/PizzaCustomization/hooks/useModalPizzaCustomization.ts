import React from 'react';
import { IProduct } from '@types';
import { useSelectSize } from './useSelectSize';

interface UseModalProductCustomizationProps extends Pick<IProduct, 'weight'> {}

export const useModalPizzaCustomization = ({
  weight,
}: UseModalProductCustomizationProps) => {
  const [pizzaSize, setPizzaSize] = React.useState<string>('25 см');
  const [dough, setDough] = React.useState<string>('Традиционное');
  const { currentSize, sizeIndex } = useSelectSize(pizzaSize);

  const currentWeight =
    dough === 'Традиционное'
      ? weight.regular[sizeIndex]
      : weight.slim[sizeIndex];

  return {
    setPizzaSize,
    setDough,
    currentSize,
    currentWeight,
    dough,
    pizzaSize,
    sizeIndex,
  };
};
