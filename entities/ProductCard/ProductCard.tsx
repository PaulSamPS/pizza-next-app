import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import { IProduct } from '@types';
import { TemplateProductCustomization } from '@templates';
import { useRouter } from 'next/router';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';

interface Products {
  products: IProduct[];
}

export const ProductCard = ({ products }: Products) => {
  const { isDesktop } = useContext(DeviceContext);
  const router = useRouter();

  return (
    <>
      {isDesktop
        ? products.map((item) => (
          <ProductCardDesktop key={item.id} product={item} />
          ))
        : products.map((item) => (
          <ProductCardMobile key={item.id} product={item} />
          ))}
      <TemplateProductCustomization
        setModal={() => router.push('/')}
        modal={!!router.query.pizza}
      />
    </>
  );
};
