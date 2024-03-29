import React from 'react';
import type { DeliveryFrom } from '@shared/types';
import { ArrowDownSmallIcon } from '@shared/assets/icons/16';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import { Input, Textarea } from '@shared/ui/Form';
import { Button, Divider, Title, Text, Spinner } from '@shared/ui';
import { AdditionsList, Tab } from '@features';
import axios from 'axios';
import { useAppDispatch } from '@shared/hooks';
import { setClearBasket } from '@shared/store/slices/basket.slice';
import { useRouter } from 'next/router';
import styles from './CheckoutDesktop.module.scss';
import { Delivery } from '../ui/Delivery';
import type { CheckoutProps } from '../type';
import { PersonalData } from '../../../entities/PersonalData';
import { ProductList, CheckoutRadio } from '../ui';

export const CheckoutDesktop = ({ ...props }: CheckoutProps) => {
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
      className={styles['basket-desktop']}
    >
      {props.products ? (
        <ProductList products={props.products} totalPrice={props.totalPrice} />
      ) : (
        <Spinner position='relative' bg='transparent' color='var(--black)' />
      )}
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
      <PersonalData
        register={props.register}
        errors={props.errors}
        control={props.control}
      />
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
          register={props.register}
          control={props.control}
          errors={props.errors}
        />
      )}
      {props.valueDeliveryMethod === 'Самовывоз' && (
        <Input
          {...props.register('resto', {
            required: { value: true, message: 'Выберите ресторан' },
          })}
          id='resto'
          error={props.errors.resto}
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
          {`Итого: ${props.totalPrice} ₽`}
        </Text>
        <Button appearance='primary' type='submit' height={48}>
          Оформить заказ
        </Button>
      </div>
    </form>
  );
};
