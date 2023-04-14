import React from 'react';
import { scrollTo } from '@shared/helpers';
import { useSelector } from 'react-redux';
import { navState } from '@shared/store/selector';

type RefsExport = {
  pizzaRef: React.MutableRefObject<HTMLDivElement | null>;
  drinkRef: React.MutableRefObject<HTMLDivElement | null>;
};

export const useScrollToBlock = (): RefsExport => {
  const pizzaRef = React.useRef<HTMLDivElement | null>(null);
  const drinkRef = React.useRef<HTMLDivElement | null>(null);
  const { name } = useSelector(navState);

  // eslint-disable-next-line default-case
  switch (name) {
    case 'Пицца':
      // eslint-disable-next-line no-lone-blocks
      {
        scrollTo(pizzaRef);
      }
      break;
    case 'Напитки': {
      scrollTo(drinkRef);
    }
  }
  return { pizzaRef, drinkRef };
};
