import React from 'react';
import Image from 'next/image';
import { Paragraph, Text } from '@components/Typography';
import { IPizzaLocal } from '@types';
import { Card, Count } from '@components/Blocks';
import axios from 'axios';
import styles from './BasketCard.module.scss';

type CartCardModalProps = {
  product: IPizzaLocal;
};

export const BasketCard = ({ product }: CartCardModalProps) => {
  const [count, setCount] = React.useState<number>(1);

  // const decrease = () => {
  //   setCount((prev) => prev - 1);
  // };

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = async () => {
    try {
      const { data: newBasket } = await axios.post(
        'http://localhost:5000/api/basket/decrease',
        {
          productId: product.id,
          productPrice: product.price[0],
        },
        { withCredentials: true }
      );
      console.log(newBasket);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Card className={styles['basket-card-modal']}>
      <Image
        src={`http://localhost:5000/product/${product.name}/${product.img.regular}`}
        alt='pizza'
        width={94}
        height={94}
      />
      <div className={styles.info}>
        <Text level='l2' weight='w1' className={styles.name}>
          {product.name}
        </Text>
        <Paragraph>{product.dough[0]}</Paragraph>
        <div className={styles.bot}>
          <Count count={count} decrease={decrease} increase={increase} />
          <Text level='l3' weight='w1' className={styles.price}>
            {`${product.price[0] * count} ₽`}
          </Text>
        </div>
      </div>
    </Card>
  );
};
