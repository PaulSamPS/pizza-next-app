import React from 'react';
import { Badge, Bottom, Tab } from '@components/Blocks';
import { Text } from '@components/Typography';
import { IProduct } from '@types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import styles from './styles/ProductCustomizationDesktop.module.scss';
import { useModalProductCustomization, useScrollAdditions } from './hooks';
import {
  ProductCustomizationImageDesktop,
  ProductCustomizationAdditionsList,
  ProductCustomizationTitle,
  ProductCustomizationDescription,
} from './components';

type ProductCustomizationDesktopProps = {
  product: IProduct;
};

export const ProductCustomizationDesktop = ({
  product,
}: ProductCustomizationDesktopProps) => {
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const {
    setPizzaSize,
    currentSize,
    currentWeight,
    setDough,
    pizzaSize,
    dough,
    sizeIndex,
  } = useModalProductCustomization({
    weight: product.weight,
  });
  const additions = additionAdapter();

  return (
    <div className={styles.card}>
      {product.badge && <Badge top='32px'>{product.badge}</Badge>}
      <ProductCustomizationImageDesktop
        pizzaSize={currentSize}
        dough={dough}
        image={product.img}
        name={product.name}
      />
      <div className={styles.customizations}>
        <ProductCustomizationTitle
          name={product.name}
          promotion={product.promotion}
        />
        <ProductCustomizationDescription
          pizzaSize={pizzaSize}
          dough={dough}
          desc={product.description}
          weight={currentWeight}
        />
        <div className={styles.addendum}>
          <Tab
            arr={product.dough}
            currentValue={dough}
            className={styles.dough}
            currentDough={setDough}
          />
          <Tab
            arr={product.size}
            currentValue={pizzaSize}
            className={styles.sizes}
            currentSize={setPizzaSize}
          />
          <Text level='l2' weight='w1' className={styles.subtitle}>
            Добавьте в пиццу
          </Text>
          <ProductCustomizationAdditionsList
            canScrollLeft={canScrollLeft}
            canScrollRight={canScrollRight}
            scrollContainerBy={scrollContainerBy}
            containerRef={containerRef}
            additions={additions}
          />
          <Bottom totalPrice={product.price[sizeIndex]} buttonWidth={155}>
            Добавить
          </Bottom>
        </div>
      </div>
    </div>
  );
};
