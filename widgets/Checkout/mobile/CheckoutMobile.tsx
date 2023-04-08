import React, { useContext } from 'react';
import type { DeliveryFrom } from '@shared/types';
import { Button, Divider, Title, Text } from '@shared/ui';
import { AdditionsList, Tab } from '@features';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';
import { DeviceContext } from '@shared/context';
import styles from './CheckoutMobile.module.scss';
import type { CheckoutProps } from '../type/checkout.interface';
import { Delivery } from '../ui/Delivery';
import { PersonalData } from '../../../entities/PersonalData';
import { CheckoutProduct } from '../../../entities/CheckoutProduct';

export const CheckoutMobile = ({ ...props }: CheckoutProps) => {
  const { basket } = useSelector(basketState);
  const { isDesktop } = useContext(DeviceContext);
  const onSubmit = async (formData: DeliveryFrom) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={props.handleSubmit(onSubmit)}
      className={styles['basket-mobile']}
    >
      <Title level='3'>Ваш Заказ</Title>
      <div className={styles.order}>
        {basket?.products.map((p, index) => (
          <CheckoutProduct
            key={index}
            size={isDesktop ? 'medium' : 'small'}
            item={p}
            pizza={p.pizza}
            product={p.product}
          />
        ))}
      </div>
      <Text level='l3' weight='w1' className={styles.sum}>
        {`Итого: ${basket?.totalPrice} ₽`}
      </Text>
      <Divider className={styles.divider} />
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
          {`Итого: ${basket?.totalPrice} ₽`}
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};