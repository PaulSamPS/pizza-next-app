import React from 'react';
import { Badge, Button, Tab } from '@components/Blocks';
import { Text, Title } from '@components/Typography';
import { ModalProductCustomization } from '@entities';
import { IProduct } from '@types';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import styles from './ProductCustomization.module.scss';
import { PizzaImage } from './PizzaImage';
import { ModalProductCustomizationTitle } from './ModalProductCustomizationTitle';
import { ModalProductCustomizationDescription } from './ModalProductCustomizationDescription';
import { ModalProductCustomizationAdditions } from './ModalProductCustomizationAdditions';
import { useScrollAdditions } from './useScrollAdditions';
import { useModalProductCustomization } from './useModalProductCustomization';

type ProductCustomizationProps = {
  product: IProduct;
  setModal: (modal: boolean) => void;
  modal: boolean;
};

export const ProductCustomization = ({
  product,
  setModal,
  modal,
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
    weightSlim: product.weightSlim,
  });
  const additions = additionAdapter();

  return (
    <ModalProductCustomization setModal={setModal} modal={modal}>
      <div className={styles.card}>
        {product.badge && <Badge top='32px'>{product.badge}</Badge>}
        <PizzaImage
          pizzaSize={currentSize}
          dough={dough}
          image={product.image}
        />
        <div className={styles.customizations}>
          <ModalProductCustomizationTitle
            name={product.name}
            promotion={product.promotion}
          />
          <ModalProductCustomizationDescription
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
            <ModalProductCustomizationAdditions
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
    </ModalProductCustomization>
  );
};
