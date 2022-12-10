import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import styles from './Mobile.module.scss';
import pizza from './pizza.jpg';

export const ProductCardMobile = () => (
  <Card className={styles['product-card']}>
    <Badge>New</Badge>
    <Image src={pizza} alt='pizza' width={100} height={100} />
    <div className={styles.info}>
      <Title level='3' weight='w1' className={styles.name}>
        Пепперони по-деревенски
      </Title>
      <Paragraph className={styles.text}>
        Огурцы маринованные, Пепперони, Сыр Моцарелла...
      </Paragraph>
      <div className={styles.bottom}>
        <Button appearance='light-primary'>от 399 ₽</Button>
      </div>
    </div>
  </Card>
);
