import React from 'react';
import { Button, Card, Badge, Count } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import Link from 'next/link';
import mobile from './ProductCardMobile.module.scss';
import { ProductCardInterface } from '../interface';

export const ProductCardMobile = ({
  type,
  name,
  img,
  description,
  badge,
  price,
  pathname,
  inCart,
}: ProductCardInterface) => (
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
        {inCart ? (
          <Count count={1} decrease={() => {}} increase={() => {}} />
        ) : (
          <Button appearance='light-primary'>
            {type === 'pizza' ? `от ${price} ₽` : `${price} ₽`}
          </Button>
        )}
      </div>
    </div>
  </Card>
);
