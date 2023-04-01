import React from 'react';
import { Text, Title } from '@shared/ui';
import { CountBasket } from '@features';
import { BasketType } from '@shared/types';
import { CheckoutProduct } from '@entities';
import styles from './ProductList.module.scss';

interface ProductListCheckout
  extends Pick<BasketType, 'products' | 'totalPrice'> {}

export const ProductList = ({ products, totalPrice }: ProductListCheckout) => (
  <>
    <Title level='3'>Ваш Заказ</Title>
    <div className={styles.order}>
      {products.map((p, index) => (
        <CheckoutProduct
          key={index}
          size='medium'
          item={p}
          pizza={p.pizza}
          product={p.product}
        >
          <CountBasket
            count={p.qty}
            pizza={p.pizza}
            product={p.product}
            item={p}
            size={p.size}
          />
        </CheckoutProduct>
      ))}
    </div>
    <Text level='l3' weight='w1' className={styles.sum}>
      {`Итого: ${totalPrice} ₽`}
    </Text>
  </>
);
