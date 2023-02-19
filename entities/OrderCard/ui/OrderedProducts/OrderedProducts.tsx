import React from 'react';
import Image from 'next/image';
import { Text } from '@components/Typography';
import { IProductLocal } from '@types';
import styles from './OrderedProducts.module.scss';

interface OrderedProductsProps
  extends Pick<IProductLocal, 'img' | 'name' | 'price'> {}

export const OrderedProducts = ({ name, img, price }: OrderedProductsProps) => (
  <div className={styles.product}>
    <Image
      className={styles.img}
      src={`http://localhost:5000/product/${name}/${img}`}
      alt={name}
      width={40}
      height={40}
    />
    <Text level='l2' weight='w1' className={styles.name}>
      {name}
    </Text>
    <Text level='l1' className={styles.extra}>
      {name}
    </Text>
    <div className={styles.count}>
      <Text level='l2' weight='w1'>
        1 товар
      </Text>
    </div>
    <Text level='l2' weight='w1' className={styles.price}>
      {`${price} ₽`}
    </Text>
  </div>
  );
