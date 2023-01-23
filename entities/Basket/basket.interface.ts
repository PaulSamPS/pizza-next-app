import { StaticImageData } from 'next/image';
import { DeliveryFrom, FormProps } from '@types';

export type BasketItems = {
  id: string;
  name: string;
  price: number;
  img: StaticImageData;
};

export type BasketRadioItems = {
  id: string;
  value: string;
};

export interface BasketProps extends FormProps<DeliveryFrom> {
  additions: BasketItems[];
  sauces: BasketItems[];
  deliveryMethod: string[];
  valueDeliveryMethod: string;
  setValueDeliveryMethod: (value: string) => void;
  arrRadioFirst: BasketRadioItems[];
  arrRadioSecond: BasketRadioItems[];
  arrRadioThird: BasketRadioItems[];
}
