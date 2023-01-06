import React from 'react';
import { IProduct } from '@types';
import { TemplateProductCustomization } from '@templates';
import { ProductCardDesktop } from './ProductCardDesktop';
import { ProductCardMobile } from './ProductCardMobile';

interface Products {
  products: IProduct[];
  isDesktop: boolean;
}

export const ProductCard = ({ products, isDesktop }: Products) => (
  <>
    {isDesktop
      ? products.map((item) => (
        <ProductCardDesktop key={item.id} product={item} />
        ))
      : products.map((item) => (
        <ProductCardMobile key={item.id} product={item} />
        ))}
    <TemplateProductCustomization />
  </>
);
