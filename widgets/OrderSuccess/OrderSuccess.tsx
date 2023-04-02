import React from 'react';
import OrderSuccessImage from '@shared/assets/orderSuccess.png';
import Image from 'next/image';
import { Text, Title } from '@shared/ui';
import styles from './OrderSuccess.module.scss';

export const OrderSuccess = () => (
  <div className={styles.wrapper}>
    <div className={styles['order-success']}>
      <Image
        src={OrderSuccessImage}
        alt='Заказ принят'
        width={220}
        height={135}
      />
      <Title level='3'>Заказ №310202 принят</Title>
      <Text level='l2'>Спасибо за заказ!</Text>
      <Text level='l2'>
        Примерное время доставки 45 минут. Статус отследить можно нажав на
        кнопку ниже
      </Text>
    </div>
  </div>
);
