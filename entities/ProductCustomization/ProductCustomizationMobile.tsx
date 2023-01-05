import React from 'react';
import Image from 'next/image';
import { IProduct } from '@types';
import { Bottom, Icon, Tab } from '@components/Blocks';
import { Text } from '@components/Typography';
import { additionAdapter } from '@packages/adapter/additionAdapter';
import { CloseIcon32 } from '@helpers/icons/32';
import { useRouter } from 'next/router';
import styles from './styles/ProductCustomizationMobile.module.scss';
import {
  ProductCustomizationAdditionsList,
  ProductCustomizationDescription,
  ProductCustomizationTitle,
} from './components';
import { useModalProductCustomization, useScrollAdditions } from './hooks';

type ProductCustomizationMobileProps = {
  product: IProduct;
};

const ProductCustomizationMobile = ({
  product,
}: ProductCustomizationMobileProps) => {
  const { containerRef, scrollContainerBy, canScrollLeft, canScrollRight } =
    useScrollAdditions();
  const { setPizzaSize, currentWeight, setDough, pizzaSize, dough, sizeIndex } =
    useModalProductCustomization({
      weight: product.weight,
    });
  const additions = additionAdapter();
  const router = useRouter();

  return (
    <div className={styles.card}>
      <Icon className={styles['close-icon']} onClick={() => router.push('/')}>
        <CloseIcon32 />
      </Icon>
      <Image
        src={
          dough === 'Традиционное'
            ? `http://localhost:5000/product/${product.name}/${product.img.regular}`
            : `http://localhost:5000/product/${product.name}/${product.img.slim}`
        }
        alt={product.name}
        width={250}
        height={250}
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
          <Bottom
            totalPrice={product.price[sizeIndex]}
            buttonHeight={40}
            buttonWidth={150}
          >
            Добавить
          </Bottom>
        </div>
      </div>
    </div>
  );
};

export default ProductCustomizationMobile;
