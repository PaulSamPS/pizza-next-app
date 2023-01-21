import React from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider, Tab } from '@components/Blocks';
import { Input, Textarea } from '@components/Form';
import { RadioGroup } from '@entities';
import styles from './BasketDesktop.module.scss';
import { CartCardList } from '../../CartCardList/CartCardList';
import { AdditionCard } from '../../AdditionCard/AdditionCard';
import additional from '../../AdditionCard/addition.jpg';
import { PersonalData } from '../components';

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

const howSoon = [
  {
    id: '1',
    name: 'Как можно скорее',
  },
  { id: '2', name: 'По времени' },
];

const payment = [
  {
    id: '3',
    name: 'Наличными',
  },
  { id: '4', name: 'Картой' },
];

const change = [
  {
    id: '3',
    name: 'Без сдачи',
  },
  { id: '4', name: 'Сдача с' },
];

const delivery = ['Доставка', 'Самовывоз'];
export const BasketDesktop = () => {
  const [deliveryValue, setDeliveryValue] = React.useState<string>(delivery[0]);
  const [howSoonRadio, setHowSoonRadio] = React.useState(howSoon[0].name);
  const [paymentRadio, setPaymentRadio] = React.useState(payment[0].name);
  const [changeMoney, setChangeMoney] = React.useState(change[0].name);

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
        <AdditionCard arr={add} />
      </div>
      <Title level='3'>Соусы</Title>
      <div className={styles.sauces}>
        <AdditionCard arr={sauces} />
      </div>
      <Divider className={styles.divider} />
      <Title level='3'>Личные данные</Title>
      <PersonalData />
      <Divider />
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
        <div className={styles['how-soon']}>
          <Text level='l2' className={styles.title}>
            Когда выполнить заказ?
          </Text>
          <RadioGroup
            items={howSoon}
            nameGroup='howSoon'
            className={styles.items}
            onChangeRadio={setHowSoonRadio}
            value={howSoonRadio}
          />
        </div>
        <Divider />
        <div className={styles['how-soon']}>
          <Text level='l2' className={styles.title}>
            Оплата
          </Text>
          <RadioGroup
            items={payment}
            nameGroup='payment'
            className={styles.items}
            onChangeRadio={setPaymentRadio}
            value={paymentRadio}
          />
        </div>
        <Divider />
        <div className={styles['change-money']}>
          <Text level='l2' className={styles.title}>
            Сдача
          </Text>
          <div className={styles.column}>
            <RadioGroup
              items={change}
              nameGroup='change-money'
              className={styles.items}
              onChangeRadio={setChangeMoney}
              value={changeMoney}
            />
            {changeMoney === change[1].name && (
              <Input
                className={styles['change-input']}
                id='change-money'
                after={<Text level='l3'>₽</Text>}
                placeholder='0'
              />
            )}
          </div>
        </div>
        <Divider />
        <div className={styles.comment}>
          <Title level='3'>Комментарий</Title>
          <Textarea />
        </div>
        <Divider />
      </div>
      <div className={styles.checkout}>
        <Text level='l3' weight='w1' className={styles.sum}>
          Итого: 2 379 ₽
        </Text>
        <Button appearance='primary' height={48}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};
