import React from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider, Tab } from '@components/Blocks';
import { Input, Textarea } from '@components/Form';
import { Controller, useForm } from 'react-hook-form';
import styles from './BasketMobile.module.scss';
import { PersonalData, RadioItems, RadioItemsWithInput } from '../components';
import { CartCardList } from '../../CartCardList/CartCardList';
import { AdditionCard } from '../../AdditionCard/AdditionCard';
import type { BasketItems, BasketRadioItems } from '../basket.interface';

type BasketMobileProps = {
  deliveryMethod: string[];
  valueDeliveryMethod: string;
  setValueDeliveryMethod: (value: string) => void;
  additions: BasketItems[];
  sauces: BasketItems[];
  arrRadioFirst: BasketRadioItems[];
  arrRadioSecond: BasketRadioItems[];
  arrRadioThird: BasketRadioItems[];
};

export interface IReviewForm {
  name: string;
  title: string;
  description: string;
  rating: number;
}

export type DeliveryFrom = {
  street: string;
  house: string;
  entrance: string;
  level: string;
  apartment: string;
  intercom: string;
  howSoon: string;
  payment: string;
  change: string;
  changeMoney: string;
  comment: string;
};
export const BasketMobile = ({ ...props }: BasketMobileProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeliveryFrom>({ mode: 'onChange' });
  const onSubmit = async (formData: DeliveryFrom) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['basket-mobile']}>
      <Title level='3'>Ваш Заказ</Title>
      <CartCardList />
      <Text level='l3' weight='w1' className={styles.sum}>
        Итого: 2 379 ₽
      </Text>
      <Divider className={styles.divider} />
      <Title level='3'>Добавить к заказу?</Title>
      <div className={styles.additions}>
        <AdditionCard arr={props.additions} />
      </div>
      <Title level='3'>Соусы</Title>
      <div className={styles.sauces}>
        <AdditionCard arr={props.sauces} />
      </div>
      <Divider className={styles.divider} />
      <Title level='3'>Личные данные</Title>
      <PersonalData />
      <Title level='3'>Доставка</Title>
      <div className={styles.delivery}>
        <Tab
          arr={props.deliveryMethod}
          currentValue={props.valueDeliveryMethod}
          setValue={props.setValueDeliveryMethod}
        />
        <div className={styles.address}>
          <Input
            {...register('street', {
              required: { value: true, message: 'Введите улицу' },
            })}
            error={errors.street}
            id='street'
            text='Улица*'
            placeholder='Пушкина'
            className={styles.street}
          />
          <Input
            {...register('house', {
              required: { value: true, message: 'Введите дом' },
            })}
            error={errors.house}
            id='house'
            text='Дом*'
            placeholder='1а'
            className={styles.house}
          />
        </div>
        <div className={styles['house-info']}>
          <Input
            {...register('entrance')}
            id='entrance'
            text='Подъезд'
            placeholder='1'
            className={styles.entrance}
          />
          <Input
            {...register('level')}
            id='level'
            text='Этаж'
            placeholder='2'
            className={styles.level}
          />
        </div>
        <div className={styles['house-info']}>
          <Input
            {...register('apartment')}
            id='apartment'
            text='Квартира'
            placeholder='1'
            className={styles['apartment-number']}
          />
          <Input
            {...register('intercom')}
            id='intercom'
            text='Домофон'
            placeholder='0000'
            className={styles.code}
          />
        </div>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioItems
              id='how-soon'
              items={props.arrRadioFirst}
              onChange={onChange}
              value={value}
              title='Когда выполнить заказ?'
            />
          )}
          name='howSoon'
        />
        <Divider />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioItems
              id='payment'
              items={props.arrRadioSecond}
              onChange={onChange}
              value={value}
              title='Оплата'
            />
          )}
          name='payment'
        />
        <Divider />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioItemsWithInput
              placeholder='0'
              items={props.arrRadioThird}
              onChange={onChange}
              value={value}
              title='Сдача'
              id='change-money'
              errors={errors}
              register={register}
            />
          )}
          name='change'
        />
        <Divider />
        <div className={styles.comment}>
          <Title level='3'>Комментарий</Title>
          <Textarea {...register('comment')} placeholder='Есть уточнения?' />
        </div>
        <Divider />
      </div>
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
