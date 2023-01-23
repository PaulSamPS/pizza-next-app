import React from 'react';
import { useSelector } from 'react-redux';
import { BasketCard } from '@entities';
import { productState } from '@store/selector';
import styles from './BasketCardList.module.scss';

export const BasketCardList = () => {
  const { pizza } = useSelector(productState);
  return (
    <div className={styles['basket-card-list']}>
      {pizza.map((product) => (
        <BasketCard key={product.id} product={product} />
      ))}
    </div>
  );
};
