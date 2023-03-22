import React from 'react';
import Image from 'next/image';
import { BasketPizzaType, IPizzaServer, IProductServer } from '@shared/types';
import { Card } from '@shared/ui/Blocks';
import { Paragraph, Text } from '@shared/ui/Typography';
import { CountBasket } from '@features';
import styles from './BasketCard.module.scss';

interface CartCardModalProps extends Omit<BasketPizzaType, 'pizza'> {
  product: IProductServer;
  pizza: IPizzaServer;
  item: Omit<BasketPizzaType, 'pizza'>;
}

export const BasketCard = ({
  product,
  pizza,
  qty,
  dough,
  price,
  item,
}: CartCardModalProps) => (
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
