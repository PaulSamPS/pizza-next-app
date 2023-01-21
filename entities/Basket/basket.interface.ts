import { StaticImageData } from 'next/image';

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

export type DeliveryFrom = {
  street: string;
  house: string;
  entrance: string;
  level: string;
  apartment: string;
  intercom: string;
  howSoon: string;
  payment: string;
  change: string;
  changeMoney: string;
  comment: string;
};

export type BasketProps = {
  additions: BasketItems[];
  sauces: BasketItems[];
  deliveryMethod: string[];
  valueDeliveryMethod: string;
  setValueDeliveryMethod: (value: string) => void;
  arrRadioFirst: BasketRadioItems[];
  arrRadioSecond: BasketRadioItems[];
  arrRadioThird: BasketRadioItems[];
};
