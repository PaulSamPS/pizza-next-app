import React from 'react';
import Image from 'next/image';
import { Paragraph, Text } from '@components/Typography';
import {
  BasketPizzaType,
  BasketType,
  IPizzaServer,
  IProductServer,
} from '@types';
import { Card, Count } from '@components/Blocks';
import axios from 'axios';
import { priceCartFromSize } from '@helpers/priceCartFromSize';
import { setSuccessBasket } from '@store/slices/basket.slice';
import { useAppDispatch } from '@hooks';
import styles from './BasketCard.module.scss';

interface CartCardModalProps extends Omit<BasketPizzaType, 'pizza'> {
  product: IProductServer;
  pizza: IPizzaServer;
}

export const BasketCard = ({
  product,
  pizza,
  qty,
  size,
  dough,
  price,
}: CartCardModalProps) => {
  const dispatch = useAppDispatch();

  const decrease = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/decrease',
        {
          // eslint-disable-next-line no-underscore-dangle
          productId: pizza ? pizza._id : product._id,
          productPrice: pizza
            ? pizza.price[priceCartFromSize(size)]
            : product.price,
          size,
          dough,
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
          productId: pizza ? pizza._id : product._id,
          productPrice: pizza
            ? pizza.price[priceCartFromSize(size)]
            : product.price,
          size,
          dough,
        },
        { withCredentials: true }
      );
      dispatch(setSuccessBasket(newBasket.data));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className={styles['basket-card-modal']}>
      <Image
        src={`http://localhost:5000/product/${
          pizza ? pizza.name : product.name
        }/${pizza ? pizza.img.regular : product.img}`}
        alt='pizza'
        width={94}
        height={94}
      />
      <div className={styles.info}>
        <Text level='l2' weight='w1' className={styles.name}>
          {pizza ? pizza.name : product.name}
        </Text>
        {pizza && <Paragraph>{dough}</Paragraph>}
        <div className={styles.bot}>
          <Count count={qty} decrease={decrease} increase={increase} />
          <Text level='l3' weight='w1' className={styles.price}>
            {`${price * qty} ₽`}
          </Text>
        </div>
      </div>
    </Card>
  );
};
