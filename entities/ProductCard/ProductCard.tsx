import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { IProduct } from '@types';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';

interface Products {
  products: IProduct[];
}

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
