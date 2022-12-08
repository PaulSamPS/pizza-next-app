import React from 'react';
import { Button, Card } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Text } from '@components/Typography';
import styles from './ProductCard.module.scss';
import pizza from './pizza.jpg';

export const ProductCard = () => (
  <Card appearance='outline' className={styles['product-card']}>
    <Image src={pizza} alt='pizza' width={300} height={300} />
    <div className={styles.body}>
      <Text level='l2' weight='w1' className={styles.text}>
        Пепперони по-деревенски
      </Text>
      <Paragraph>Огурцы маринованные, Пепперони, Сыр Моцарелла...</Paragraph>
      <div className={styles.bottom}>
        <Button appearance='primary'>Выбрать</Button>
        <Text level='l1' className={styles.price}>
          от 399 ₽
        </Text>
      </div>
    </div>
  </Card>
);
