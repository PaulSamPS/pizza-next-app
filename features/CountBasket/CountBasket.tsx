import React from 'react';
import { MinusIcon, PlusIcon } from '@shared/assets/icons/8';
import { Button } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import axios from 'axios';
import {
  BasketPizzaType,
  BasketType,
  IPizzaServer,
  IProductServer,
} from '@shared/types';
import { setSuccessBasket } from '@shared/store/slices/basket.slice';
import { priceCartFromSize } from '@shared/helpers';
import styles from './CountBasket.module.scss';

interface CountBasketProps {
  height?: number;
  size?: 'small' | 'medium';
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
  count: number | undefined;
}

export const CountBasket = ({
  product,
  pizza,
  size = 'small',
  count,
  item,
  height = 36,
}: CountBasketProps) => {
  const dispatch = useAppDispatch();

  const decrease = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/decrease',
        {
          productId: pizza ? pizza._id : product._id,
          productPrice: pizza
            ? pizza.price[priceCartFromSize(size)]
            : product.price,
          size: item.size,
          dough: item.dough,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket.data));
    } catch (e) {
      console.log(e);
    }
  };

  const increase = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/increase',
        {
          productId: pizza ? pizza._id : product._id,
          productPrice: pizza
            ? pizza.price[priceCartFromSize(size)]
            : product.price,
          size: item.size,
          dough: item.dough,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket.data));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={styles.count}>
      <Button
        appearance='light-primary'
        height={height}
        onClick={decrease}
        disabled={count! <= 1}
      >
        <MinusIcon />
      </Button>
      <div className={styles.value}>{count}</div>
      <Button appearance='light-primary' height={36} onClick={increase}>
        <PlusIcon />
      </Button>
    </div>
  );
};
