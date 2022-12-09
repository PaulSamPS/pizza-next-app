import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import styles from './ProductCard.module.scss';
import pizza from './pizza.jpg';

export const ProductCard = () => (
  <Card appearance='outline' className={styles['product-card']}>
    <Badge>New</Badge>
    <Image src={pizza} alt='pizza' width={300} height={300} />
    <div className={styles.body}>
      <Title level='l5' weight='w1' className={styles.text}>
        Пепперони по-деревенски
      </Title>
      <Paragraph>Огурцы маринованные, Пепперони, Сыр Моцарелла...</Paragraph>
      <div className={styles.bottom}>
        <Button appearance='primary' height={48} width={130}>
          Выбрать
        </Button>
        <Title level='l5' className={styles.price}>
          от 399 ₽
        </Title>
      </div>
    </div>
  </Card>
);
