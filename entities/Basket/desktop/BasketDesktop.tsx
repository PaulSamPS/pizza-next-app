import React from 'react';
import { Text, Title } from '@components/Typography';
import { Button, Divider, Tab } from '@components/Blocks';
import { useForm } from 'react-hook-form';
import type { DeliveryFrom } from '@types';
import { Input, Textarea } from '@components/Form';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import { useSelector } from 'react-redux';
import { basketState } from '@store/selector';
import styles from './BasketDesktop.module.scss';
import { BasketDelivery } from '../../BasketDelivery';
import type { BasketProps } from '../basket.interface';
import { PersonalData } from '../../PersonalData';
import { BasketProduct } from '../../BasketProduct';
import { AdditionsView } from '../../AdditionsView';
import { BasketRadio } from '../../BasketRadio/BasketRadio';

export const BasketDesktop = ({ ...props }: BasketProps) => {
  const { basket } = useSelector(basketState);
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
        {basket?.products
          .filter((i) => i.pizza)
          .map((p, index) => (
            // eslint-disable-next-line no-underscore-dangle
            <BasketProduct key={index} size='medium' item={p} />
          ))}
      </div>
      <Text level='l3' weight='w1' className={styles.sum}>
        {`Итого: ${basket?.totalPrice!} ₽`}
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
      <div className={styles.top}>
        <Title level='3'>Доставка</Title>
        <Tab
          arr={props.deliveryMethod}
          currentValue={props.valueDeliveryMethod}
          setValue={props.setValueDeliveryMethod}
          className={styles.tabs}
        />
      </div>
      {props.valueDeliveryMethod === 'Доставка' && (
        <BasketDelivery
          register={register}
          control={control}
          errors={errors}
          arrRadioFirst={props.arrRadioFirst}
          arrRadioSecond={props.arrRadioSecond}
          arrRadioThird={props.arrRadioThird}
        />
      )}
      {props.valueDeliveryMethod === 'Самовывоз' && (
        <Input
          {...register('resto', {
            required: { value: true, message: 'Выберите ресторан' },
          })}
          id='resto'
          error={errors.resto}
          after={<ArrowDownSmallIcon />}
          placeholder='Выберите ресторан'
          text='Ресторан*'
        />
      )}
      <BasketRadio
        arrRadioFirst={props.arrRadioFirst}
        arrRadioSecond={props.arrRadioSecond}
        arrRadioThird={props.arrRadioThird}
        register={props.register}
        control={props.control}
        errors={props.errors}
      />
      <div className={styles.comment}>
        <Title level='3'>Комментарий</Title>
        <Textarea
          {...props.register('comment')}
          placeholder='Есть уточнения?'
        />
      </div>
      <Divider />
      <div className={styles.checkout}>
        <Text level='l3' weight='w1' className={styles.sum}>
          {`Итого: ${basket?.totalPrice} ₽`}
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
