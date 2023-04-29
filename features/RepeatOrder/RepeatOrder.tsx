import React from 'react';
import { Button } from '@shared/ui';
import { useSelector } from 'react-redux';
import { oneOrderState, userState } from '@shared/store/selector';
import axios from 'axios';
import * as process from 'process';
import { useAddToBasket, useAppDispatch } from '@shared/hooks';
import { setClearBasket } from '@shared/store/slices/basket.slice';
import { useRouter } from 'next/router';
import { getOneOrder } from '@shared/api';
import styles from './RepeatOrder.module.scss';

interface RepeatOrderI {
  currentOrderId?: string;
}

export const RepeatOrder = ({ currentOrderId }: RepeatOrderI) => {
  const { user } = useSelector(userState);
  const { order } = useSelector(oneOrderState);
  const { repeatOrder } = useAddToBasket();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const handleRepeatOrder = async () => {
    if (currentOrderId) {
      await dispatch(getOneOrder(currentOrderId, user.id));
    }
    const ttc = await order.products.reduce((acc, cur) => acc + cur.qty, 0);

    await axios
      .get(`${process.env.API_URL}/basket/clear`, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(setClearBasket());
        repeatOrder(order.totalPrice, ttc, order.products);
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
