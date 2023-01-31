import React from 'react';
import Image from 'next/image';
import { Text, Title } from '@components/Typography';
import { Card, Count } from '@components/Blocks';
import cx from 'clsx';
import { BasketPizzaType, BasketType } from '@types';
import { useAppDispatch } from '@hooks';
import axios from 'axios';
import { setSuccessBasket } from '@store/slices/basket.slice';
import styles from './BasketProduct.module.scss';

type BasketProductProps = {
  size?: 'small' | 'medium';
  item: BasketPizzaType;
};

export const BasketProduct = ({ size = 'small', item }: BasketProductProps) => {
  const dispatch = useAppDispatch();

  const decrease = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/decrease',
        {
          // eslint-disable-next-line no-underscore-dangle
          productId: item.pizza._id,
          productPrice: item.price,
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
          // eslint-disable-next-line no-underscore-dangle
          productId: item.pizza._id,
          productPrice: item.price,
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
    <Card className={cx(styles['basket-product'], size && styles[size])}>
      <Image
        src={`http://localhost:5000/product/${item.pizza.name}/${
          item.dough === 'Традиционное'
            ? item.pizza.img.regular
            : item.pizza.img.slim
        }`}
        width={110}
        height={110}
        alt='pizza'
      />
      <div className={styles.info}>
        <div className={styles.description}>
          <Title level='5' weight='w1' className={styles.name}>
            {item.pizza.name}
          </Title>
          <Text level='l2' className={styles.options}>
            {`${item.dough} тесто, ${item.size}`}
          </Text>
        </div>
        <div className={styles.total}>
          <Count count={item.qty} decrease={decrease} increase={increase} />
          <Title level='5' className={styles['total-price']}>
            {`${item.price * item.qty} ₽`}
          </Title>
        </div>
      </div>
    </Card>
  );
};
