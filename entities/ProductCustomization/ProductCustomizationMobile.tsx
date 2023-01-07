import React from 'react';
import Image from 'next/image';
import { IProduct } from '@types';
import { Bottom, Icon, Tab } from '@components/Blocks';
import { Text } from '@components/Typography';
import { CloseIcon32 } from '@helpers/icons/32';
import styles from './styles/ProductCustomizationMobile.module.scss';
import {
  ProductCustomizationAdditionsItem,
  ProductCustomizationDescription,
  ProductCustomizationTitle,
} from './components';
import { AdditionsType } from '../../types/additions';
import { AdditionsList } from '../AddionList/AdditionsList';

type ProductCustomizationMobileProps = {
  product: IProduct;
  containerRef: React.RefObject<HTMLDivElement>;
  scrollContainerBy: (distance: number) => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
  pizzaSize: string;
  setPizzaSize: (size: string) => void;
  currentWeight: string;
  setDough: (dough: string) => void;
  dough: string;
  sizeIndex: number;
  additions: AdditionsType[];
  navigateToMain: () => void;
  isDesktop: boolean;
};

const ProductCustomizationMobile = ({
  product,
  additions,
  navigateToMain,
  pizzaSize,
  setPizzaSize,
  currentWeight,
  setDough,
  dough,
  sizeIndex,
  canScrollRight,
  scrollContainerBy,
  canScrollLeft,
  containerRef,
  isDesktop,
}: ProductCustomizationMobileProps) => (
  <div className={styles.card}>
    <Icon className={styles['close-icon']} onClick={navigateToMain}>
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
        <AdditionsList
          canScrollLeft={canScrollLeft}
          canScrollRight={canScrollRight}
          scrollContainerBy={scrollContainerBy}
          containerRef={containerRef}
          distance={105}
          isDesktop={isDesktop}
        >
          {additions.map((item) => (
            <ProductCustomizationAdditionsItem
              key={item.id}
              image={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </AdditionsList>
        <Bottom
          totalPrice={product.price[sizeIndex]}
          buttonHeight={40}
          buttonWidth={150}
          gram={product.type === 'pizza' && `${currentWeight}`}
        >
          Добавить
        </Bottom>
      </div>
    </div>
  </div>
);

export default ProductCustomizationMobile;
