import React from 'react';
import { Button, Card, Badge, Count } from '@components/Blocks';
import { Paragraph, Title } from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import desktop from './ProductCardDesktop.module.scss';
import { ProductCardInterface } from '../interface';

export const ProductCardDesktop = ({
  img,
  type,
  price,
  name,
  badge,
  description,
  pathname,
  inCart,
}: ProductCardInterface) => (
  <Card className={desktop['product-card']}>
    {badge && <Badge>{badge}</Badge>}
    <Link href={`/?${type}=${pathname}`}>
      <Image
        src={`http://localhost:5000/product/${name}/${img}`}
        alt='pizza'
        width={300}
        height={300}
      />
    </Link>
    <div className={desktop.body}>
      <Title level='3' weight='w1' className={desktop.name}>
        {name}
      </Title>
      <Paragraph className={desktop.text}>{description}</Paragraph>
      <div className={desktop.bottom}>
        {inCart ? (
          <Count
            count={1}
            decrease={() => {}}
            increase={() => {}}
            height={48}
          />
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
