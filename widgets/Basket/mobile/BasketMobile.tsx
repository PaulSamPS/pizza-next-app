import React from 'react';
import type { DeliveryFrom } from '@shared/types';
import { Button, Divider, Title, Text } from '@shared/ui';
import { AdditionsList, Tab } from '@features';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';
import styles from './BasketMobile.module.scss';
import type { BasketProps } from '../type/basket.interface';
import { BasketDelivery } from '../../../entities/BasketDelivery';
import { PersonalData } from '../../../entities/PersonalData';
import { BasketProduct } from '../../../entities/BasketProduct';

export const BasketMobile = ({ ...props }: BasketProps) => {
  const { basket } = useSelector(basketState);
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
          // eslint-disable-next-line no-underscore-dangle
          <BasketProduct
            key={index}
            size='medium'
            item={p}
            pizza={p.pizza}
            product={p.product}
          />
        ))}
      </div>
      <Text level='l3' weight='w1' className={styles.sum}>
        Итого: 2 379 ₽
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
      <BasketDelivery
        control={props.control}
        errors={props.errors}
        register={props.register}
        arrRadioFirst={props.arrRadioFirst}
        arrRadioSecond={props.arrRadioSecond}
        arrRadioThird={props.arrRadioThird}
      />
      <div className={styles.checkout}>
        <Text level='l3' weight='w1' className={styles['checkout-sum']}>
          Итого: 2 379 ₽
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
