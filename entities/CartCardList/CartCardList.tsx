import React from 'react';
import { useSelector } from 'react-redux';
import { CartCard } from '@entities';
import { productState } from '../../store/selector/selector';
import styles from './CartCardList.module.scss';

export const CartCardList = () => {
  const { products } = useSelector(productState);
  return (
    <div className={styles['cart-card-list']}>
      {products.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </div>
  );
};
