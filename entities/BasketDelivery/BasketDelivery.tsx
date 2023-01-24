import React, { useContext } from 'react';
import { Input } from '@components/Form';
import { DeviceContext } from '@context';
import type { DeliveryFrom, FormProps } from '@types';
import mobile from './BasketDeliveryMobile.module.scss';
import desktop from './BasketDeliveryDesktop.module.scss';
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
    </div>
  );
};
