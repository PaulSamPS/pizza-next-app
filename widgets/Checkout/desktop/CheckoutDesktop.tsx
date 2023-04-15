import React from 'react';
import { useForm } from 'react-hook-form';
import type { DeliveryFrom } from '@shared/types';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { useSelector } from 'react-redux';
import { basketState, userState } from '@shared/store/selector';
import { Input, Textarea } from '@shared/ui/Form';
import { Button, Divider, Title, Text } from '@shared/ui';
import { AdditionsList, Tab } from '@features';
import axios from 'axios';
import styles from './CheckoutDesktop.module.scss';
import { Delivery } from '../ui/Delivery';
import type { CheckoutProps } from '../type';
import { PersonalData } from '../../../entities/PersonalData';
import { ProductList, CheckoutRadio } from '../ui';

export const CheckoutDesktop = ({ ...props }: CheckoutProps) => {
  const { basket } = useSelector(basketState);
  const { user } = useSelector(userState);
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
    await axios.post('http://localhost:5000/api/order', {
      userId: user.id,
      products: basket?.products.map((i) => i),
      totalPrice: basket?.totalPrice,
      info: formData,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles['basket-desktop']}
    >
      <ProductList
        products={basket?.products!}
        totalPrice={basket?.totalPrice!}
      />
      <Divider className={styles.divider} />
      <Title level='3'>Добавить к заказу?</Title>
      <div className={styles.additions}>
        <AdditionsList item={props.additions} basket distance={310} />
      </div>
      <Title level='3'>Соусы</Title>
      <div className={styles.sauces}>
        <AdditionsList item={props.sauces} basket distance={310} />
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
        <Delivery
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
      <CheckoutRadio
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
