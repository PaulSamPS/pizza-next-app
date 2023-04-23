import { StaticImageData } from 'next/image';
import { BasketType, DeliveryFrom, FormProps } from '@shared/types';
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import React from 'react';

export type CheckoutItems = {
  id: string;
  name: string;
  price: number;
  img: StaticImageData;
};

export type CheckoutRadioItems = {
  id: string;
  value: string;
};

export interface CheckoutProps
  extends FormProps<DeliveryFrom>,
    Omit<BasketType, '_id'> {
  additions: CheckoutItems[];
  sauces: CheckoutItems[];
  deliveryMethod: string[];
  valueDeliveryMethod: string;
  setValueDeliveryMethod: (value: string) => void;
  arrRadioFirst: CheckoutRadioItems[];
  arrRadioSecond: CheckoutRadioItems[];
  arrRadioThird: CheckoutRadioItems[];
  handleSubmit: (
    onValid: SubmitHandler<DeliveryFrom>,
    onInvalid?: SubmitErrorHandler<DeliveryFrom>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
}
