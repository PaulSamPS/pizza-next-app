import React from 'react';
import { Card, Divider } from '@components/Blocks';
import styles from './OrderCardMobile.module.scss';
import { InfoOrder, ProductPreview } from './ui';
import { Text } from '@components/Typography';
import { useSelector } from 'react-redux';
import { productState } from '@store/selector';

const order = [
  {
    id: 0,
    title: 'Заказ',
    value: '№130312',
    date: '22.01.2023',
  },
  {
    id: 1,
    title: 'Сумма',
    value: '399 ₽',
  },
  {
    id: 2,
    title: 'Статус',
    value: 'Обрабатывается',
  },
  {
    id: 3,
    title: 'Оплачено',
    value: 'Картой',
  },
];

export const OrderCardMobile = () => {
  const { items } = useSelector(productState);

  return (
    <Card className={styles.card}>
      <div className={styles.top}>
        <div className={styles.border} />
        {order.map((c) => (
          <InfoOrder key={c.id} title={c.title} value={c.value} date={c.date} />
        ))}
        <div className={styles.address}>
          <Text level='l1'>Адрес</Text>
          <Text level='l2' className={styles['address-value']}>
            ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
          </Text>
        </div>
      </div>
      <Divider />
      <div className={styles['products-preview']}>
        {items.slice(0, 3).map((i) => (
          <ProductPreview key={i.id} name={i.name} img={i.img} />
        ))}
      </div>
    </Card>
  );
};
