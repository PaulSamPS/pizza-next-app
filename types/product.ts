import { StaticImageData } from 'next/image';

export interface IProduct {
  id: number;
  badge: string | null;
  name: string;
  description: string;
  price: number[];
  image: { regular: StaticImageData; slim: StaticImageData };
  promotion: boolean;
  weight: string[];
  weightSlim: string[];
}
