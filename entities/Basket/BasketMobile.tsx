import React from 'react';
import { Text, Title } from '@components/Typography';
import { Divider } from '@components/Blocks';
import { Input } from '@components/Form';
import styles from './BasketMobile.module.scss';
import { CartCardList } from '../CartCardList/CartCardList';
import { AdditionCard } from '../AdditionCard/AdditionCard';
import additional from '../AdditionCard/addition.jpg';

const add = [
  {
    id: '1',
    name: 'Картофель из печи',
    price: 179,
    img: additional,
  },
  {
    id: '2',
    name: 'Картофель из печи2',
    price: 250,
    img: additional,
  },
  {
    id: '3',
    name: 'Картофель из печи3',
    price: 179,
    img: additional,
  },
  {
    id: '4',
    name: 'Картофель из печи4',
    price: 250,
    img: additional,
  },
];

const sauces = [
  {
    id: '1',
    name: 'Картофель из печи',
    price: 179,
    img: additional,
  },
  {
    id: '2',
    name: 'Картофель из печи2',
    price: 250,
    img: additional,
  },
  {
    id: '3',
    name: 'Картофель из печи3',
    price: 179,
    img: additional,
  },
  {
    id: '4',
    name: 'Картофель из печи4',
    price: 250,
    img: additional,
  },
];

const BasketMobile = () => (
  <div className={styles['basket-mobile']}>
    <Title level='3'>Ваш Заказ</Title>
    <CartCardList />
    <Text level='l3' weight='w1' className={styles.sum}>
      Итого: 2 379 ₽
    </Text>
    <Divider className={styles.divider} />
    <Title level='3'>Добавить к заказу?</Title>
    <div className={styles.additions}>
      <AdditionCard add={add} />
    </div>
    <Title level='3'>Соусы</Title>
    <div className={styles.sauces}>
      <AdditionCard add={sauces} />
    </div>
    <Divider className={styles.divider} />
    <Title level='3'>Личные данные</Title>
    <Input id='name' text='Имя*' />
  </div>
  );

export default BasketMobile;
