import React from 'react';
import Image from 'next/image';
import { Text, Title } from '@components/Typography';
import { Card, Count } from '@components/Blocks';
import cx from 'clsx';
import {
  BasketPizzaType,
  BasketType,
  IPizzaServer,
  IProductServer,
} from '@types';
import { useAppDispatch } from '@hooks';
import axios from 'axios';
import { setSuccessBasket } from '@store/slices/basket.slice';
import { priceCartFromSize } from '@helpers/priceCartFromSize';
import styles from './BasketProduct.module.scss';

interface BasketProductProps {
  size?: 'small' | 'medium';
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
}

export const BasketProduct = ({
  size = 'small',
  product,
  pizza,
  item,
}: BasketProductProps) => {
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
    <Card className={cx(styles['basket-product'], size && styles[size])}>
      <Image
        src={`http://localhost:5000/product/${
          pizza ? pizza.name : product.name
        }/${pizza ? pizza.img.regular : product.img}`}
        width={110}
        height={110}
        alt='pizza'
      />
      <div className={styles.info}>
        <div className={styles.description}>
          <Title level='5' weight='w1' className={styles.name}>
            {pizza ? pizza.name : product.name}
          </Title>
          <Text level='l2' className={styles.options}>
            {pizza ? `${item.dough} тесто, ${item.size}` : product.weight}
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
