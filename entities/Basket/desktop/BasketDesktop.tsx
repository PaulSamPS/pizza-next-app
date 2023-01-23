import React from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider } from '@components/Blocks';
import { useForm } from 'react-hook-form';
import type { DeliveryFrom } from '@types';
import styles from './BasketDesktop.module.scss';
import { BasketDelivery } from '../../BasketDelivery';
import type { BasketProps } from '../basket.interface';
import { PersonalData } from '../../PersonalData';
import { BasketProduct } from '../../BasketProduct';
import { AdditionsView } from '../../AdditionsView';

export const BasketDesktop = ({ ...props }: BasketProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<DeliveryFrom>({
    mode: 'onChange',
    defaultValues: {
      howSoon: props.arrRadioFirst[0].value,
      payment: props.arrRadioSecond[0].value,
      change: props.arrRadioThird[0].value,
    },
  });
  const onSubmit = async (formData: DeliveryFrom) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles['basket-desktop']}
    >
      <Title level='3'>Ваш Заказ</Title>
      <div className={styles.order}>
        <BasketProduct size='medium' />
      </div>
      <Text level='l3' weight='w1' className={styles.sum}>
        Итого: 2 379 ₽
      </Text>
      <Divider className={styles.divider} />
      <Title level='3'>Добавить к заказу?</Title>
      <div className={styles.additions}>
        <AdditionsView arr={props.additions} distance={310} />
      </div>
      <Title level='3'>Соусы</Title>
      <div className={styles.sauces}>
        <AdditionsView arr={props.sauces} distance={310} />
      </div>
      <Divider className={styles.divider} />
      <Title level='3'>Личные данные</Title>
      <PersonalData register={register} errors={errors} control={control} />
      <Divider />
      <BasketDelivery
        register={register}
        control={control}
        errors={errors}
        arrRadioFirst={props.arrRadioFirst}
        arrRadioSecond={props.arrRadioSecond}
        arrRadioThird={props.arrRadioThird}
      />
      <div className={styles.checkout}>
        <Text level='l3' weight='w1' className={styles.sum}>
          Итого: 2 379 ₽
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
