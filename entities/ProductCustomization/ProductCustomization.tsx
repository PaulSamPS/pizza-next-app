import React from 'react';
import { Badge, Button, Tab } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import { IProduct } from '@types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import styles from './styles/ProductCustomization.module.scss';
import { useModalProductCustomization, useScrollAdditions } from './hooks';
import {
  ProductCustomizationImage,
  ProductCustomizationAdditionsList,
  ProductCustomizationTitle,
  ProductCustomizationDescription,
} from './components';

type ProductCustomizationProps = {
  product: IProduct;
};

export const ProductCustomization = ({
  product,
}: ProductCustomizationProps) => {
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
      <ProductCustomizationImage
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
          <div className={styles.add}>
            <Title level='4'>{`Итого: ${product.price[sizeIndex]} ₽`}</Title>
            <Button appearance='primary' height={48} width={155}>
              Добавить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
