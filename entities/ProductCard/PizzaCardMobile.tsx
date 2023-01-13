import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import Link from 'next/link';
import mobile from './styles/mobile.module.scss';

export type PizzaCardInterface = {
  badge: string | null;
  name: string;
  img: string;
  description: string;
  type: string;
  pathname?: string;
  price: number;
};

export const PizzaCardMobile = ({
  type,
  name,
  img,
  description,
  badge,
  price,
  pathname,
}: PizzaCardInterface) => (
  <Card className={mobile['product-card']}>
    {badge && <Badge>{badge}</Badge>}
    <Link href={`/?${type}=${pathname}`}>
      <Image
        src={`http://localhost:5000/product/${name}/${img}`}
        alt='pizza'
        width={128}
        height={128}
      />
    </Link>
    <div className={mobile.info}>
      <Title level='3' weight='w1' className={mobile.name}>
        {name}
      </Title>
      <Paragraph className={mobile.text}>{description}</Paragraph>
      <div className={mobile.bottom}>
        <Link href={`/?${type}=${pathname}`}>
          <Button appearance='light-primary'>
            {type === 'pizza' ? `от ${price} ₽` : `${price} ₽`}
          </Button>
        </Link>
      </div>
    </div>
  </Card>
);
