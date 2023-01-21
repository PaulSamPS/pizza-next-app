import React from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider } from '@components/Blocks';
import { useForm } from 'react-hook-form';
import styles from './BasketDesktop.module.scss';
import { CartCardList } from '../../CartCardList/CartCardList';
import { AdditionCard } from '../../AdditionCard/AdditionCard';
import { PersonalData } from '../../BasketDelivery/components';
import { BasketDelivery } from '../../BasketDelivery';
import type { BasketProps, DeliveryFrom } from '../basket.interface';

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
        <Button appearance='primary' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
