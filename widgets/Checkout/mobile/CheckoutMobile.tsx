import React from 'react';
import type { DeliveryFrom } from '@shared/types';
import { Button, Divider, Title, Text, Spinner } from '@shared/ui';
import { AdditionsList, Tab } from '@features';
import styles from './CheckoutMobile.module.scss';
import type { CheckoutProps } from '../type';
import { Delivery } from '../ui/Delivery';
import { PersonalData } from '../../../entities/PersonalData';
import { ProductList } from '../ui';

export const CheckoutMobile = ({ ...props }: CheckoutProps) => {
  const onSubmit = async (formData: DeliveryFrom) => {
    console.log(formData);
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
        control={props.control}
        errors={props.errors}
        register={props.register}
        arrRadioFirst={props.arrRadioFirst}
        arrRadioSecond={props.arrRadioSecond}
        arrRadioThird={props.arrRadioThird}
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
