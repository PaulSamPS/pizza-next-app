import React from 'react';
import { MinusIcon, PlusIcon } from '@shared/assets/icons/8';
import { Button } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import axios from 'axios';
import { BasketType, IProductLocal } from '@shared/types';
import { setSuccessBasket } from '@shared/store/slices/basket.slice';
import styles from './Count.module.scss';

interface CountProps extends React.AllHTMLAttributes<HTMLDivElement> {
  height?: number;
  item: IProductLocal;
  count: number | undefined;
}

export const Count = ({ count, item, height = 36 }: CountProps) => {
  const dispatch = useAppDispatch();

  const decrease = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/decrease',
        {
          // eslint-disable-next-line no-underscore-dangle
          productId: item.id,
          productPrice: item.price,
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
          // eslint-disable-next-line no-underscore-dangle
          productId: item.id,
          productPrice: item.price,
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
