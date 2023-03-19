import React from 'react';
import Image from 'next/image';
import { IPizzaLocal } from '@shared/types';
import { Bottom, Icon } from '@shared/ui/Blocks';
import { Text } from '@shared/ui/Typography';
import { CloseIcon32 } from '@shared/assets/icons/32';
import { AdditionsType } from '@shared/types/additions';
import { AdditionsList, Tab } from '@features';
import { useAppDispatch } from '@shared/hooks';
import axios from 'axios';
import { setSuccessBasket } from '@shared/store/slices/basket.slice';
import styles from './PizzaCustomizationMobile.module.scss';
import {
  PizzaCustomizationDescription,
  PizzaCustomizationTitle,
} from '../components';

type ProductCustomizationMobileProps = {
  pizza: IPizzaLocal;
  pizzaSize: string;
  setPizzaSize: (size: string) => void;
  currentWeight: string;
  setDough: (dough: string) => void;
  dough: string;
  sizeIndex: number;
  additions: AdditionsType[];
  navigateToMain: () => void;
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
}: ProductCustomizationMobileProps) => {
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
          <AdditionsList item={additions} distance={105} />
          <Bottom
            totalPrice={pizza.price[sizeIndex]}
            buttonHeight={40}
            buttonWidth={150}
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
