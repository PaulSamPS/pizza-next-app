import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { useForm } from 'react-hook-form';
import { DeliveryFrom } from '@shared/types';
import { useAppDispatch } from '@shared/hooks';
import { getBasket } from '@shared/api';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';
import { Container, Title } from '@shared/ui';
import { useRouter } from 'next/router';
import { CheckoutMobile } from './mobile';
import additional from '../../features/AddionList/ui/AdditionCard/addition.jpg';
import { CheckoutDesktop } from './desktop';

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
    id: '0',
    value: 'Как можно скорее',
  },
  { id: '1', value: 'По времени' },
];

const payment = [
  {
    id: '0',
    value: 'Наличными',
  },
  { id: '1', value: 'Картой' },
];

const change = [
  {
    id: '0',
    value: 'Без сдачи',
  },
  { id: '1', value: 'Сдача с' },
];

const delivery = ['Доставка', 'Самовывоз'];

export const Checkout = () => {
  const { isDesktop } = useContext(DeviceContext);
  const [deliveryValue, setDeliveryValue] = React.useState<string>(delivery[0]);
  const [basketEmpty, setBasketEmpty] = React.useState<boolean>(false);
  const { basket } = useSelector(basketState);
  const { pathname } = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeliveryFrom>({
    mode: 'onChange',
    defaultValues: {
      howSoon: howSoon[0].value,
      payment: payment[0].value,
      change: change[0].value,
    },
  });

  React.useEffect(() => {
    dispatch(getBasket()).then(() => {
      if (basket.totalCount <= 0) {
        setBasketEmpty(true);
      }
    });
  }, [pathname]);

  if (isDesktop) {
    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {basketEmpty ? (
          <Container>
            <Title level='3'>Корзина пуста</Title>
          </Container>
        ) : (
          <CheckoutDesktop
            deliveryMethod={delivery}
            valueDeliveryMethod={deliveryValue}
            setValueDeliveryMethod={setDeliveryValue}
            sauces={sauces}
            additions={additions}
            arrRadioFirst={howSoon}
            arrRadioSecond={payment}
            arrRadioThird={change}
            control={control}
            errors={errors}
            handleSubmit={handleSubmit}
            register={register}
            products={basket.products}
            totalPrice={basket.totalPrice}
            totalCount={basket.totalCount}
          />
        )}
      </>
    );
  }

  return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {basketEmpty ? (
        <Container>
          <Title level='3'>Корзина пуста</Title>
        </Container>
      ) : (
        <CheckoutMobile
          deliveryMethod={delivery}
          valueDeliveryMethod={deliveryValue}
          setValueDeliveryMethod={setDeliveryValue}
          sauces={sauces}
          additions={additions}
          arrRadioFirst={howSoon}
          arrRadioSecond={payment}
          arrRadioThird={change}
          control={control}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          products={basket.products}
          totalPrice={basket.totalPrice}
          totalCount={basket.totalCount}
        />
      )}
    </>
  );
};
