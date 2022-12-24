import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { StaticImageData } from 'next/image';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';

type ProductType = {
  id: number;
  badge: string | null;
  name: string;
  description: string;
  price: number;
  image: { regular: StaticImageData; slim: StaticImageData };
  promotion: boolean;
};

type Products = {
  products: ProductType[];
};

export const ProductCard = ({ products }: Products) => {
  const { isDesktop } = useContext(DeviceContext);

  if (isDesktop) {
    return (
      <>
        {products.map((product) => (
          <ProductCardDesktop key={product.id} product={product} />
        ))}
      </>
    );
  }
  return <ProductCardMobile />;
};
