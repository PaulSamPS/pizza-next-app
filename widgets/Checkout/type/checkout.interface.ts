import { StaticImageData } from 'next/image';
import { DeliveryFrom, FormProps } from '@shared/types';

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

export interface CheckoutProps extends FormProps<DeliveryFrom> {
  additions: CheckoutItems[];
  sauces: CheckoutItems[];
  deliveryMethod: string[];
  valueDeliveryMethod: string;
  setValueDeliveryMethod: (value: string) => void;
  arrRadioFirst: CheckoutRadioItems[];
  arrRadioSecond: CheckoutRadioItems[];
  arrRadioThird: CheckoutRadioItems[];
}
