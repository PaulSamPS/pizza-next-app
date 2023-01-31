import React from 'react';
import Image from 'next/image';
import { Paragraph, Text } from '@components/Typography';
import { BasketType, IPizzaServer, IProductServer } from '@types';
import { Card, Count } from '@components/Blocks';
import axios from 'axios';
import { priceCartFromSize } from '@helpers/priceCartFromSize';
import { setSuccessBasket } from '@store/slices/basket.slice';
import { useAppDispatch } from '@hooks';
import styles from './BasketCard.module.scss';

type CartCardModalProps = {
  product: IProductServer;
  pizza: IPizzaServer;
  item: { qty: number; size: string; dough: string; price: number };
};

export const BasketCard = ({ product, pizza, item }: CartCardModalProps) => {
  const dispatch = useAppDispatch();

  const decrease = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/decrease',
        {
          // eslint-disable-next-line no-underscore-dangle
          productId: pizza ? pizza._id : product._id,
          productPrice: pizza
            ? pizza.price[priceCartFromSize(item.size)]
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
          // eslint-disable-next-line no-underscore-dangle
          productId: pizza ? pizza._id : product._id,
          productPrice: pizza
            ? pizza.price[priceCartFromSize(item.size)]
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
        {pizza && <Paragraph>{item.dough}</Paragraph>}
        <div className={styles.bot}>
          <Count count={item.qty} decrease={decrease} increase={increase} />
          <Text level='l3' weight='w1' className={styles.price}>
            {`${item.price * item.qty} ₽`}
          </Text>
        </div>
      </div>
    </Card>
  );
};
