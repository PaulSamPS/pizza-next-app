import React from 'react';
import { Button, Card, Badge, Count } from '@components/Blocks';
import { Paragraph, Title } from '@components/Typography';
import Image from 'next/image';
import desktop from './styles/desktop.module.scss';
import { ProductCardInterface } from './productCard.interface';

export const ProductCardDesktop = ({
  img,
  type,
  price,
  name,
  badge,
  description,
  inCart,
}: ProductCardInterface) => (
  <Card className={desktop['product-card']}>
    {badge && <Badge>{badge}</Badge>}
    <Image
      src={`http://localhost:5000/product/${name}/${img}`}
      alt='pizza'
      width={300}
      height={300}
    />
    <div className={desktop.body}>
      <Title level='3' weight='w1' className={desktop.name}>
        {name}
      </Title>
      <Paragraph className={desktop.text}>{description}</Paragraph>
      <div className={desktop.bottom}>
        {inCart ? (
          <Count count={1} decrease={() => {}} increase={() => {}} />
          ) : (
            <Button appearance='primary' height={48} width={130}>
              В корзину
            </Button>
          )}
        <Title level='5' className={desktop.price}>
          {type === 'pizza' ? `от ${price} ₽` : `${price} ₽`}
        </Title>
      </div>
    </div>
  </Card>
  );
