import React, { useContext } from 'react';
import { Divider } from '@components/Blocks';
import { Input, Textarea } from '@components/Form';
import { Controller } from 'react-hook-form';
import { Title } from '@components/Typography';
import { DeviceContext } from '@context';
import type { DeliveryFrom, FormProps } from '@types';
import mobile from './BasketDeliveryMobile.module.scss';
import desktop from './BasketDeliveryDesktop.module.scss';
import { RadioItems, RadioItemsWithInput } from './components';
import type { BasketProps } from '../Basket/basket.interface';

interface BasketDeliveryProps
  extends Pick<
      BasketProps,
      'arrRadioFirst' | 'arrRadioSecond' | 'arrRadioThird'
    >,
    Omit<FormProps<DeliveryFrom>, 'handleSubmit'> {}

export const BasketDelivery = ({ ...props }: BasketDeliveryProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes.delivery}>
      <div className={classes.address}>
        <Input
          {...props.register('street', {
            required: { value: true, message: 'Введите улицу' },
          })}
          error={props.errors.street}
          id='street'
          text='Улица*'
          placeholder='Пушкина'
          className={classes.street}
        />
        <Input
          {...props.register('house', {
            required: { value: true, message: 'Введите дом' },
          })}
          error={props.errors.house}
          id='house'
          text='Дом*'
          placeholder='1а'
          className={classes.house}
        />
      </div>
      <div className={classes['house-info']}>
        <Input
          {...props.register('entrance')}
          id='entrance'
          text='Подъезд'
          placeholder='1'
          className={classes.entrance}
        />
        <Input
          {...props.register('level')}
          id='level'
          text='Этаж'
          placeholder='2'
          className={classes.level}
        />
      </div>
      <div className={classes['house-info']}>
        <Input
          {...props.register('apartment')}
          id='apartment'
          text='Квартира'
          placeholder='1'
          className={classes['apartment-number']}
        />
        <Input
          {...props.register('intercom')}
          id='intercom'
          text='Домофон'
          placeholder='0000'
          className={classes.code}
        />
      </div>
      <Controller
        control={props.control}
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
        control={props.control}
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
        control={props.control}
        render={({ field: { onChange, value } }) => (
          <RadioItemsWithInput
            placeholder='0'
            items={props.arrRadioThird}
            onChange={onChange}
            value={value}
            title='Сдача'
            id='change-money'
            errors={props.errors}
            register={props.register}
          />
        )}
        name='change'
      />
      <Divider />
      <div className={classes.comment}>
        <Title level='3'>Комментарий</Title>
        <Textarea
          {...props.register('comment')}
          placeholder='Есть уточнения?'
        />
      </div>
      <Divider />
    </div>
  );
};
