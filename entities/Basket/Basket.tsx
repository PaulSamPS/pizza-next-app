import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { BasketDesktop } from './desktop';
import { BasketMobile } from './mobile';
import additional from '../AdditionCard/addition.jpg';

const additions = [
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

const howSoon = [
  {
    id: '1',
    value: 'Как можно скорее',
  },
  { id: '2', value: 'По времени' },
];

const payment = [
  {
    id: '3',
    value: 'Наличными',
  },
  { id: '4', value: 'Картой' },
];

const change = [
  {
    id: '3',
    value: 'Без сдачи',
  },
  { id: '4', value: 'Сдача с' },
];

const delivery = ['Доставка', 'Самовывоз'];

export const Basket = () => {
  const { isDesktop } = useContext(DeviceContext);
  const [deliveryValue, setDeliveryValue] = React.useState<string>(delivery[0]);
  const [howSoonRadio, setHowSoonRadio] = React.useState(howSoon[0].value);
  const [paymentRadio, setPaymentRadio] = React.useState(payment[0].value);
  const [changeMoney, setChangeMoney] = React.useState(change[0].value);

  if (isDesktop) {
    return <BasketDesktop />;
  }

  return (
    <BasketMobile
      deliveryMethod={delivery}
      valueDeliveryMethod={deliveryValue}
      setValueDeliveryMethod={setDeliveryValue}
      sauces={sauces}
      additions={additions}
      arrRadioFirst={howSoon}
      valueRadioFirst={howSoonRadio}
      setValueRadioFirst={setHowSoonRadio}
      arrRadioSecond={payment}
      valueRadioSecond={paymentRadio}
      setValueRadioSecond={setPaymentRadio}
      arrRadioThird={change}
      valueRadioThird={changeMoney}
      setValueRadioThird={setChangeMoney}
    />
  );
};
