import React from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider, Tab } from '@components/Blocks';
import { useForm } from 'react-hook-form';
import mobile from './BasketMobile.module.scss';
import desktop from '../desktop/BasketDesktop.module.scss';
import { PersonalData } from '../../BasketDelivery/components';
import { CartCardList } from '../../CartCardList/CartCardList';
import { AdditionCard } from '../../AdditionCard/AdditionCard';
import type { BasketProps, DeliveryFrom } from '../basket.interface';
import { BasketDelivery } from '../../BasketDelivery';

export const BasketMobile = ({ ...props }: BasketProps) => {
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
  const classes = props.isDesktop ? desktop : mobile;
  const onSubmit = async (formData: DeliveryFrom) => {
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={classes['basket-mobile']}
    >
      <Title level='3'>Ваш Заказ</Title>
      <CartCardList />
      <Text level='l3' weight='w1' className={classes.sum}>
        Итого: 2 379 ₽
      </Text>
      <Divider className={classes.divider} />
      <Title level='3'>Добавить к заказу?</Title>
      <div className={classes.additions}>
        <AdditionCard arr={props.additions} />
      </div>
      <Divider />
      <Title level='3'>Соусы</Title>
      <div className={classes.sauces}>
        <AdditionCard arr={props.sauces} />
      </div>
      <Divider className={classes.divider} />
      <Title level='3'>Личные данные</Title>
      <PersonalData />
      <Title level='3'>Доставка</Title>
      <Tab
        arr={props.deliveryMethod}
        currentValue={props.valueDeliveryMethod}
        setValue={props.setValueDeliveryMethod}
      />
      <BasketDelivery
        control={control}
        errors={errors}
        register={register}
        arrRadioFirst={props.arrRadioFirst}
        arrRadioSecond={props.arrRadioSecond}
        arrRadioThird={props.arrRadioThird}
      />
      <div className={classes.checkout}>
        <Text level='l3' weight='w1' className={classes['checkout-sum']}>
          Итого: 2 379 ₽
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
