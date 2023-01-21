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
