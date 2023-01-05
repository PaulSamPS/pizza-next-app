import React from 'react';
import { IProduct } from '@types';
import { TemplateProductCustomization } from '@templates';
import { NextRouter } from 'next/router';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';

interface Products {
  products: IProduct[];
  router: NextRouter;
  isDesktop: boolean;
}

export const ProductCard = ({ products, router, isDesktop }: Products) => (
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
