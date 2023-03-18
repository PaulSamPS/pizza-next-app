import React from 'react';
import { Controller } from 'react-hook-form';
import { DeliveryFrom, FormProps } from '@shared/types';
import { Divider } from '@shared/ui';
import { RadioItems, RadioItemsWithInput } from '../BasketDelivery/components';
import { BasketProps } from '../Basket/type/basket.interface';

interface BasketRadioProps
  extends Pick<
      BasketProps,
      'arrRadioFirst' | 'arrRadioSecond' | 'arrRadioThird'
    >,
    Omit<FormProps<DeliveryFrom>, 'handleSubmit'> {}

export const BasketRadio = ({ ...props }: BasketRadioProps) => (
  <>
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
  </>
);
