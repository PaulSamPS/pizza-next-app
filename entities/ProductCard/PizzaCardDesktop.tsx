import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import { Paragraph, Title } from '@components/Typography';
import Image from 'next/image';
import Link from 'next/link';
import desktop from './styles/desktop.module.scss';

export type PizzaCardInterface = {
  badge: string | null;
  name: string;
  img: string;
  description: string;
  type: string;
  pathname?: string;
  price: number;
};

export const PizzaCardDesktop = ({
  img,
  type,
  pathname,
  price,
  name,
  badge,
  description,
}: PizzaCardInterface) => (
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
        <Link href={`/?${type}=${pathname}`}>
          <Button appearance='primary' height={48} width={130}>
            Выбрать
          </Button>
        </Link>
        <Title level='5' className={desktop.price}>
          {type === 'pizza' ? `от ${price} ₽` : `${price} ₽`}
        </Title>
      </div>
    </div>
  </Card>
  );
