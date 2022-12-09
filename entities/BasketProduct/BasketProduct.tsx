import React from 'react';
import Image from 'next/image';
import { Text, Title } from '@components/Typography';
import { Card, Count } from '@components/Blocks';
import cx from 'clsx';
import img from './pizza.jpg';
import styles from './BasketProduct.module.scss';

type BasketProductProps = {
  size?: 'small' | 'medium';
};

export const BasketProduct = ({ size = 'small' }: BasketProductProps) => (
  <Card className={cx(styles['basket-product'], size && styles[size])}>
    <Image src={img} alt='pizza' />
    <div className={styles.info}>
      <div className={styles.description}>
        <Title level='5' weight='w1' className={styles.name}>
          Пепперони по-деревенски
        </Title>
        <Text level='l2' className={styles.options}>
          Традиционное тесто, 23 см
        </Text>
      </div>
      <div className={styles.total}>
        <Count count={12} decrease={() => {}} increase={() => {}} />
        <Title level='5' className={styles['total-price']}>
          399 ₽
        </Title>
      </div>
    </div>
  </Card>
);
