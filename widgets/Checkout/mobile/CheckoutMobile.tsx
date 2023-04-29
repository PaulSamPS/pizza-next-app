import React from 'react';
import type { DeliveryFrom } from '@shared/types';
import { Button, Divider, Title, Text, Spinner } from '@shared/ui';
import { AdditionsList, Tab } from '@features';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import { useAppDispatch } from '@shared/hooks';
import { useRouter } from 'next/router';
import axios from 'axios';
import { setClearBasket } from '@shared/store/slices/basket.slice';
import { ProductList } from '../ui';
import { PersonalData } from '../../../entities/PersonalData';
import { Delivery } from '../ui/Delivery';
import type { CheckoutProps } from '../type';
import styles from './CheckoutMobile.module.scss';

export const CheckoutMobile = ({ ...props }: CheckoutProps) => {
  const { user } = useSelector(userState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onSubmit = async (formData: DeliveryFrom) => {
    await axios
      .post('http://localhost:5000/api/order', {
        userId: user.id,
        products: props.products.map((i) => i),
        totalPrice: props.totalPrice,
        info: formData,
      })
      .then(async () => {
        await router.push('/success');
        await axios
          .get('http://localhost:5000/api/basket/clear', {
            withCredentials: true,
          })
          .then(() => {
            dispatch(setClearBasket());
          });
      });
  };

  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      className={styles['basket-mobile']}
    >
      {props.products ? (
        <ProductList products={props.products} totalPrice={props.totalPrice} />
      ) : (
        <Spinner position='relative' bg='transparent' color='var(--black)' />
      )}
      <Title level='3'>Добавить к заказу?</Title>
      <div className={styles.additions}>
        <AdditionsList item={props.additions} distance={310} basket />
      </div>
      <Divider />
      <Title level='3'>Соусы</Title>
      <div className={styles.sauces}>
        <AdditionsList item={props.sauces} distance={310} basket />
      </div>
      <Divider className={styles.divider} />
      <Title level='3'>Личные данные</Title>
      <PersonalData
        register={props.register}
        errors={props.errors}
        control={props.control}
      />
      <Title level='3'>Доставка</Title>
      <Tab
        arr={props.deliveryMethod}
        currentValue={props.valueDeliveryMethod}
        setValue={props.setValueDeliveryMethod}
      />
      <Delivery
        register={props.register}
        control={props.control}
        errors={props.errors}
      />
      <div className={styles.checkout}>
        <Text level='l3' weight='w1' className={styles['checkout-sum']}>
          {`Итого: ${props.totalPrice} ₽`}
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
