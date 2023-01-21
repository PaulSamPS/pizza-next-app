import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { BasketMobile } from './mobile';
import additional from '../AdditionCard/addition.jpg';
import { BasketDesktop } from './desktop';

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
  {
    id: '5',
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
  {
    id: '5',
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

  if (isDesktop) {
    return (
      <BasketDesktop
        deliveryMethod={delivery}
        valueDeliveryMethod={deliveryValue}
        setValueDeliveryMethod={setDeliveryValue}
        sauces={sauces}
        additions={additions}
        arrRadioFirst={howSoon}
        arrRadioSecond={payment}
        arrRadioThird={change}
      />
    );
  }

  return (
    <BasketMobile
      deliveryMethod={delivery}
      valueDeliveryMethod={deliveryValue}
      setValueDeliveryMethod={setDeliveryValue}
      sauces={sauces}
      additions={additions}
      arrRadioFirst={howSoon}
      arrRadioSecond={payment}
      arrRadioThird={change}
    />
  );
};
