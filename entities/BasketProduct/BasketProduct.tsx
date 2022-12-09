import React from 'react';
import Image from 'next/image';
import { Text, Title } from '@components/Typography';
import { Card, Count } from '@components/Blocks';
import img from './pizza.jpg';
import styles from './BasketProduct.module.scss';

export const BasketProduct = () => (
  <Card appearance='shadow' className={styles['basket-product']}>
    <Image src={img} alt='pizza' />
    <div className={styles.description}>
      <Title level='5' weight='w1' className={styles.name}>
        Пепперони по-деревенски
      </Title>
      <Text level='l2'>Традиционное тесто, 23 см</Text>
    </div>
    <Count count={12} decrease={() => {}} increase={() => {}} />
    <Title level='5' className={styles['total-price']}>
      399 р
    </Title>
  </Card>
);
