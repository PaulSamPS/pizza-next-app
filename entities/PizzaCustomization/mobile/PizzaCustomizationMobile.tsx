import React from 'react';
import Image from 'next/image';
import { IPizzaLocal } from '@types';
import { Bottom, Icon, Tab } from '@components/Blocks';
import { Text } from '@components/Typography';
import { CloseIcon32 } from '@helpers/icons/32';
import styles from './PizzaCustomizationMobile.module.scss';
import {
  PizzaCustomizationAdditionsItem,
  PizzaCustomizationDescription,
  PizzaCustomizationTitle,
} from '../components';
import { AdditionsType } from '../../../types/additions';
import { AdditionsList } from '../../AddionList/AdditionsList';

type ProductCustomizationMobileProps = {
  pizza: IPizzaLocal;
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

export const PizzaCustomizationMobile = ({
  pizza,
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
          ? `http://localhost:5000/product/${pizza.name}/${pizza.img.regular}`
          : `http://localhost:5000/product/${pizza.name}/${pizza.img.slim}`
      }
      alt={pizza.name}
      width={250}
      height={250}
    />
    <div className={styles.customizations}>
      <PizzaCustomizationTitle name={pizza.name} promotion={pizza.promotion} />
      <PizzaCustomizationDescription
        pizzaSize={pizzaSize}
        dough={dough}
        desc={pizza.description}
        weight={currentWeight}
      />
      <div className={styles.addendum}>
        <Tab
          arr={pizza.dough}
          currentValue={dough}
          className={styles.dough}
          currentDough={setDough}
        />
        <Tab
          arr={pizza.size}
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
            <PizzaCustomizationAdditionsItem
              key={item.id}
              image={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
        </AdditionsList>
        <Bottom
          totalPrice={pizza.price[sizeIndex]}
          buttonHeight={40}
          buttonWidth={150}
          gram={pizza.type === 'pizza' && `${currentWeight}`}
        >
          Добавить
        </Bottom>
      </div>
    </div>
  </div>
);
