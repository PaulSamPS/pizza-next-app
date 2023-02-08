import React from 'react';
import { Text, Title } from '@components/Typography';
import { Card, Divider, Icon, Tab } from '@components/Blocks';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import styles from './Cabinet.module.scss';
import { CabinetOrderCard } from '../CabinetOrderCard/CabinetOrderCard';

const arr = ['История заказов', 'Настройки'];
const card = [
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

export const Cabinet = () => {
  const [currentValue, setCurrentValue] = React.useState<string>(arr[0]);
  return (
    <div className={styles.cabinet}>
      <div className={styles.title}>
        <Title level='1'>Мой аккаунт</Title>
        <Tab
          className={styles.tab}
          arr={arr}
          currentValue={currentValue}
          setValue={setCurrentValue}
        />
      </div>
      <Card className={styles.card}>
        <div className={styles.top}>
          <div className={styles.border} />
          {card.map((c) => (
            <CabinetOrderCard
              key={c.id}
              title={c.title}
              value={c.value}
              date={c.date}
            />
          ))}
          <Icon className={styles.icon}>
            <ArrowDownSmallIcon />
          </Icon>
        </div>
        <Divider />
        <div className={styles['order-info']}>
          <Text level='l2'>
            ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
          </Text>
        </div>
        <Divider />
      </Card>
    </div>
  );
};
