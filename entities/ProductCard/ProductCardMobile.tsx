import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import mobile from './styles/mobile.module.scss';
import pizza from './pizza.jpg';

export const ProductCardMobile = () => (
  <Card className={mobile['product-card']}>
    <Badge>New</Badge>
    <Image src={pizza} alt='pizza' width={100} height={100} />
    <div className={mobile.info}>
      <Title level='3' weight='w1' className={mobile.name}>
        Пепперони по-деревенски
      </Title>
      <Paragraph className={mobile.text}>
        Огурцы маринованные, Пепперони, Сыр Моцарелла...
      </Paragraph>
      <div className={mobile.bottom}>
        <Button appearance='light-primary'>от 399 ₽</Button>
      </div>
    </div>
  </Card>
);
