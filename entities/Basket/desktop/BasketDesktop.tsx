import React from 'react';
import { Text, Title } from '@components/Typography';
import { Divider, Tab } from '@components/Blocks';
import { Input, InputPhone } from '@components/Form';
import styles from './BasketDesktop.module.scss';
import { CartCardList } from '../../CartCardList/CartCardList';
import { AdditionCard } from '../../AdditionCard/AdditionCard';
import additional from '../../AdditionCard/addition.jpg';

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
  {
    id: '5',
    name: 'Картофель из печи5',
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
  {
    id: '5',
    name: 'Картофель из печи5',
    price: 250,
    img: additional,
  },
];

type InputValueState = {
  formattedValue: string;
  value: string;
};

const delivery = ['Доставка', 'Самовывоз'];
export const BasketDesktop = () => {
  const [values, setValues] = React.useState<InputValueState>({
    formattedValue: '',
    value: '',
  });
  const [deliveryValue, setDeliveryValue] = React.useState<string>(delivery[0]);

  return (
    <div className={styles['basket-desktop']}>
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
      <div className={styles['personal-data']}>
        <Input id='name' text='Имя*' placeholder='Иван' />
        <InputPhone
          values={values}
          setValues={setValues}
          name='Номер телефона*'
        />
        <Input id='email' text='Почта*' placeholder='mail@gmail.com' />
      </div>
      <div className={styles.delivery}>
        <div className={styles.top}>
          <Title level='3'>Доставка</Title>
          <Tab
            arr={delivery}
            currentValue={deliveryValue}
            setValue={setDeliveryValue}
            className={styles.tabs}
          />
        </div>
        <div className={styles.address}>
          <Input
            id='street'
            text='Улица*'
            placeholder='Пушкина'
            className={styles.street}
          />
          <Input
            id='house'
            text='Дом*'
            placeholder='1а'
            className={styles.house}
          />
        </div>
        <div className={styles['house-info']}>
          <Input
            id='entrance'
            text='Подъезд'
            placeholder='1'
            className={styles.entrance}
          />
          <Input
            id='level'
            text='Этаж'
            placeholder='2'
            className={styles.level}
          />
        </div>
        <div className={styles['house-info']}>
          <Input
            id='apartment'
            text='Квартира'
            placeholder='1'
            className={styles['apartment-number']}
          />
          <Input
            id='code'
            text='Домофон'
            placeholder='0000'
            className={styles.code}
          />
        </div>
      </div>
    </div>
  );
};
