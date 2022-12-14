import React from 'react';
import { Badge, Bottom, Tab } from '@components/Blocks';
import { Text } from '@components/Typography';
import { IProduct } from '@types';
import styles from './styles/ProductCustomizationDesktop.module.scss';
import {
  ProductCustomizationImageDesktop,
  ProductCustomizationTitle,
  ProductCustomizationDescription,
  ProductCustomizationAdditionsItem,
} from './components';
import { AdditionsType } from '../../types/additions';
import { AdditionsList } from '../AddionList/AdditionsList';

type ProductCustomizationDesktopProps = {
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
  currentSize: string;
  isDesktop: boolean;
};

export const ProductCustomizationDesktop = ({
  product,
  setDough,
  pizzaSize,
  dough,
  sizeIndex,
  setPizzaSize,
  currentWeight,
  scrollContainerBy,
  canScrollLeft,
  canScrollRight,
  containerRef,
  additions,
  currentSize,
  isDesktop,
}: ProductCustomizationDesktopProps) => (
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
          ???????????????? ?? ??????????
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
          buttonWidth={155}
          gram={product.type === 'pizza' && `${currentWeight}`}
        >
          ????????????????
        </Bottom>
      </div>
    </div>
  </div>
);
