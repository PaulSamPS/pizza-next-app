import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import type { DeliveryFrom, FormProps } from '@shared/types';
import { Input } from '@shared/ui';
import mobile from './DeliveryMobile.module.scss';
import desktop from './DeliveryDesktop.module.scss';
import type { CheckoutProps } from '../../type';

interface BasketDeliveryProps
  extends Pick<
      CheckoutProps,
      'arrRadioFirst' | 'arrRadioSecond' | 'arrRadioThird'
    >,
    Omit<FormProps<DeliveryFrom>, 'handleSubmit'> {}

export const Delivery = ({ ...props }: BasketDeliveryProps) => {
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
