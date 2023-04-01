import React from 'react';
import Image from 'next/image';
import cx from 'clsx';
import type { CheckoutProductProps } from '@shared/types';
import { Card } from '@shared/ui/Blocks';
import { Text, Title } from '@shared/ui/Typography';
import { CountBasket } from '@features';
import styles from './CheckoutProduct.module.scss';

export const CheckoutProduct = ({
  size = 'small',
  product,
  pizza,
  item,
  children,
}: CheckoutProductProps) => (
  <Card className={cx(styles['basket-product'], size && styles[size])}>
    <Image
      src={`http://localhost:5000/product/${
        pizza ? pizza.name : product.name
      }/${pizza ? pizza.img.regular : product.img}`}
      width={110}
      height={110}
      alt='pizza'
    />
    <div className={styles.info}>
      <div className={styles.description}>
        <Title level='5' weight='w1' className={styles.name}>
          {pizza ? pizza.name : product.name}
        </Title>
        <Text level='l2' className={styles.options}>
          {pizza ? `${item.dough} тесто, ${item.size}` : product.weight}
        </Text>
      </div>
      <div className={styles.total}>
        {children}
        <Title level='5' className={styles['total-price']}>
          {`${item.price * item.qty} ₽`}
        </Title>
      </div>
    </div>
  </Card>
);
