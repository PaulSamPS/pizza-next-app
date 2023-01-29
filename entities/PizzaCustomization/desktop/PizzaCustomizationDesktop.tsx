import React from 'react';
import { Badge, Bottom, Tab } from '@components/Blocks';
import { Text } from '@components/Typography';
import { IPizzaLocal } from '@types';
import { AdditionsList } from '@entities';
import axios from 'axios';
import type { AdditionsType } from '@types';
import { useAppDispatch } from '@hooks';
import { setSuccessBasket } from '@store/slices/basket.slice';
import styles from './PizzaCustomizationDesktop.module.scss';
import {
  PizzaCustomizationImageDesktop,
  PizzaCustomizationTitle,
  PizzaCustomizationDescription,
  PizzaCustomizationAdditionsItem,
} from '../components';

type ProductCustomizationDesktopProps = {
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
  currentSize: string;
  isDesktop: boolean;
};

export const PizzaCustomizationDesktop = ({
  pizza,
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
}: ProductCustomizationDesktopProps) => {
  const dispatch = useAppDispatch();
  const addToBasket = async () => {
    try {
      const { data: newBasket } = await axios.post(
        'http://localhost:5000/api/basket/add-pizza',
        {
          pizzaId: pizza.id,
          pizzaPrice: pizza.price[sizeIndex],
          size: pizzaSize,
          dough,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.card}>
      {pizza.badge && <Badge top='32px'>{pizza.badge}</Badge>}
      <PizzaCustomizationImageDesktop
        pizzaSize={currentSize}
        dough={dough}
        image={pizza.img}
        name={pizza.name}
      />
      <div className={styles.customizations}>
        <PizzaCustomizationTitle
          name={pizza.name}
          promotion={pizza.promotion}
        />
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
            buttonWidth={155}
            gram={pizza.type === 'pizza' && `${currentWeight}`}
            handleClick={addToBasket}
          >
            Добавить
          </Bottom>
        </div>
      </div>
    </div>
  );
};
