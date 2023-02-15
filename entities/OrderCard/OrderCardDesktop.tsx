import React from 'react';
import { Card, Divider, Icon } from '@components/Blocks';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import { Text } from '@components/Typography';
import { useSelector } from 'react-redux';
import { productState } from '@store/selector';
import styles from './OrderCardDesktop.module.scss';
import { InfoOrder, OrderedProducts, ProductPreview } from './ui';

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

export const OrderCardDesktop = () => {
  const { items } = useSelector(productState);
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <Card className={styles.card}>
      <div className={styles.top}>
        <div className={styles.border} />
        {order.map((c) => (
          <InfoOrder key={c.id} title={c.title} value={c.value} date={c.date} />
        ))}
        <Icon className={styles.icon} onClick={() => setVisible(!visible)}>
          <ArrowDownSmallIcon />
        </Icon>
      </div>
      <Divider />
      <div className={styles.info}>
        <Text level='l2'>
          ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
        </Text>
        <div className={styles['products-preview']}>
          {items.slice(0, 3).map((i) => (
            <ProductPreview key={i.id} name={i.name} img={i.img} />
          ))}
        </div>
      </div>
      {visible && (
        <>
          <Divider />
          {items.map((i) => (
            <OrderedProducts
              key={i.id}
              img={i.img}
              name={i.name}
              price={i.price}
            />
          ))}
        </>
      )}
    </Card>
  );
};
