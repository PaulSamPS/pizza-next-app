import React from 'react';
import { DeviceContext } from '@context';
import { IProduct } from '@types';
import { ProductCustomizationDesktop } from './ProductCustomizationDesktop';
import ProductCustomizationMobile from './ProductCustomizationMobile';

type ProductCustomizationProps = {
  product: IProduct;
};

export const ProductCustomization = ({
  product,
}: ProductCustomizationProps) => {
  const { isDesktop } = React.useContext(DeviceContext);

  React.useEffect(() => {}, []);

  if (isDesktop) {
    return <ProductCustomizationDesktop product={product} />;
  }

  return <ProductCustomizationMobile product={product} />;
};
