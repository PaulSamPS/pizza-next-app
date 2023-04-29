import React from 'react';
import { Button } from '@shared/ui';
import { useSelector } from 'react-redux';
import { oneOrderState } from '@shared/store/selector';
import axios from 'axios';
import * as process from 'process';
import { useAddToBasket, useAppDispatch } from '@shared/hooks';
import { setClearBasket } from '@shared/store/slices/basket.slice';
import { useRouter } from 'next/router';
import styles from './RepeatOrder.module.scss';

export const RepeatOrder = () => {
  const { order } = useSelector(oneOrderState);
  const { addItemToBasket } = useAddToBasket();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const repeatOrder = async () => {
    const count = order.products.reduce((acc, cur) => acc + cur.qty, 0);
    const sum = order.products.reduce((acc, cur) => acc + cur.price, 0);
    console.log(count, sum);
    await axios
      .get(`${process.env.API_URL}/basket/clear`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(setClearBasket());
        order.products.forEach((o) =>
          o.pizza
            ? addItemToBasket(o.pizza._id, o.price, o.qty, count, sum)
            : addItemToBasket(o.product._id, o.price, o.qty, count, sum)
        );
        router.push('/checkout');
      });
  };
  return (
    <div>
      <Button
        className={styles.repeat}
        appearance='transparent'
        onClick={repeatOrder}
      >
        Повторить заказ
      </Button>
    </div>
  );
};
