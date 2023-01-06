import React from 'react';
import { DeviceContext } from '@context';
import { IProduct } from '@types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import { useRouter } from 'next/router';
import { useScrollAdditions } from '@hooks';
import { ProductCustomizationDesktop } from './ProductCustomizationDesktop';
import ProductCustomizationMobile from './ProductCustomizationMobile';
import { useModalProductCustomization } from './hooks';

type ProductCustomizationProps = {
  product: IProduct;
};

export const ProductCustomization = ({
  product,
}: ProductCustomizationProps) => {
  const { isDesktop } = React.useContext(DeviceContext);
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const {
    setPizzaSize,
    currentWeight,
    setDough,
    pizzaSize,
    dough,
    sizeIndex,
    currentSize,
  } = useModalProductCustomization({
    weight: product.weight,
  });
  const additions = additionAdapter();
  const router = useRouter();

  if (isDesktop) {
    return (
      <ProductCustomizationDesktop
        product={product}
        additions={additions}
        canScrollRight={canScrollRight}
        scrollContainerBy={scrollContainerBy}
        containerRef={containerRef}
        canScrollLeft={canScrollLeft}
        dough={dough}
        setDough={setDough}
        currentWeight={currentWeight}
        sizeIndex={sizeIndex}
        setPizzaSize={setPizzaSize}
        pizzaSize={pizzaSize}
        currentSize={currentSize}
      />
    );
  }

  return (
    <ProductCustomizationMobile
      product={product}
      additions={additions}
      navigateToMain={() => router.push('/')}
      canScrollRight={canScrollRight}
      scrollContainerBy={scrollContainerBy}
      containerRef={containerRef}
      canScrollLeft={canScrollLeft}
      dough={dough}
      setDough={setDough}
      currentWeight={currentWeight}
      sizeIndex={sizeIndex}
      setPizzaSize={setPizzaSize}
      pizzaSize={pizzaSize}
    />
  );
};
