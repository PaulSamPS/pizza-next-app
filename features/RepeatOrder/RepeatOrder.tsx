import React from 'react';
import { Button } from '@shared/ui';
import axios from 'axios';
import * as process from 'process';
import { useAddToBasket, useAppDispatch } from '@shared/hooks';
import { setClearBasket } from '@shared/store/slices/basket.slice';
import { useRouter } from 'next/router';
import { BasketPizzaType, BasketProductType } from '@shared/types';
import styles from './RepeatOrder.module.scss';

interface RepeatOrderI {
  products: [BasketProductType & BasketPizzaType];
  ttp: number;
}

export const RepeatOrder = ({ ttp, products }: RepeatOrderI) => {
  const { repeatOrder } = useAddToBasket();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleRepeatOrder = async () => {
    const ttcPizza = products
      .filter((i) => i.pizza)
      .reduce((acc, cur) => acc + cur.qty, 0);
    const ttcProduct = products
      .filter((i) => i.product)
      .reduce((acc, cur) => acc + cur.qty, 0);

    await axios
      .get(`${process.env.API_URL}/basket/clear`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(setClearBasket());
        repeatOrder(ttp, ttcPizza + ttcProduct, products);
      })
      .then(() => {
        router.push('/checkout');
      });
  };

  return (
    <div>
      <Button
        className={styles.repeat}
        appearance='transparent'
        onClick={handleRepeatOrder}
      >
        Повторить заказ
      </Button>
    </div>
  );
};
