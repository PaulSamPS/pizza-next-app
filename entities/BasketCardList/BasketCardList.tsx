import React from 'react';
import { useSelector } from 'react-redux';
import { BasketCard } from '@entities';
import { basketState } from '@shared/store/selector';
import styles from './BasketCardList.module.scss';

export const BasketCardList = () => {
  const { basket } = useSelector(basketState);
  return (
    <div className={styles['basket-card-list']}>
      {basket &&
        basket.products.map((product, index) => (
          <BasketCard
            key={index}
            dough={product.dough}
            pizza={product.pizza}
            price={product.price}
            product={product.product}
            qty={product.qty}
            size={product.size}
          />
        ))}
    </div>
  );
};
