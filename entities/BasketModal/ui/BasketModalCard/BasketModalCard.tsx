import React from 'react';
import Image from 'next/image';
import {
  BasketPizzaType,
  BasketType,
  IPizzaServer,
  IProductServer,
} from '@shared/types';
import { Card } from '@shared/ui/Blocks';
import { Paragraph, Text } from '@shared/ui/Typography';
import { CountBasket } from '@features';
import axios from 'axios';
import { priceCartFromSize } from '@shared/helpers';
import { setSuccessBasket } from '@shared/store/slices/basket.slice';
import { useAppDispatch } from '@shared/hooks';
import styles from './BasketModalCard.module.scss';

interface CartCardModalProps extends Omit<BasketPizzaType, 'pizza'> {
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
}

export const BasketModalCard = ({
  product,
  pizza,
  qty,
  dough,
  price,
  item,
}: CartCardModalProps) => {
  const dispatch = useAppDispatch();
  const remove = async () => {
    try {
      const newBasket = await axios.post<BasketType>(
        'http://localhost:5000/api/basket/delete',
        {
          productId: item._id,
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
        <Text level='l2' onClick={remove}>
          удвлить
        </Text>
        {pizza && <Paragraph>{dough}</Paragraph>}
        <div className={styles.bot}>
          <CountBasket
            count={qty}
            item={item}
            size={item.size}
            pizza={pizza}
            product={product}
          />
          <Text level='l3' weight='w1' className={styles.price}>
            {`${price * qty} ₽`}
          </Text>
        </div>
      </div>
    </Card>
  );
};
