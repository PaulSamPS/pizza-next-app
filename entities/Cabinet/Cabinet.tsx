import React from 'react';
import { Text, Title } from '@components/Typography';
import { Card, Divider, Icon, Tab } from '@components/Blocks';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import { useSelector } from 'react-redux';
import { productState } from '@store/selector';
import Image from 'next/image';
import { CabinetOrderCard } from '../CabinetOrderCard/CabinetOrderCard';
import styles from './Cabinet.module.scss';

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
  const { items } = useSelector(productState);
  const [visible, setVisible] = React.useState<boolean>(false);
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
          <Icon className={styles.icon} onClick={() => setVisible(!visible)}>
            <ArrowDownSmallIcon />
          </Icon>
        </div>
        <Divider />
        <div className={styles['order-info']}>
          <Text level='l2'>
            ул. Львовская 48/2, офис 301, 2 этаж, домофон 4801#
          </Text>
          <div className={styles['products-image']}>
            {items.slice(0, 3).map((i) => (
              <Image
                key={i.id}
                className={styles.image}
                src={`http://localhost:5000/product/${i.name}/${i.img}`}
                alt={i.name}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
        {visible && (
          <>
            <Divider />
            <div className={styles.items}>
              {items.map((i) => (
                <div className={styles.item}>
                  <Image
                    className={styles.img}
                    src={`http://localhost:5000/product/${i.name}/${i.img}`}
                    alt={i.name}
                    width={40}
                    height={40}
                  />
                  <Text level='l2' weight='w1' className={styles.name}>
                    {i.name}
                  </Text>
                  <Text level='l1' className={styles.extra}>
                    {i.name}
                  </Text>
                  <div className={styles.count}>
                    <Text level='l2' weight='w1'>
                      1 товар
                    </Text>
                  </div>
                  <Text level='l2' weight='w1' className={styles.price}>
                    {`${i.price} ₽`}
                  </Text>
                </div>
              ))}
            </div>
          </>
        )}
      </Card>
    </div>
  );
};
