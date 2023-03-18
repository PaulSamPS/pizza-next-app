import React from 'react';
import { Button, Card, Badge } from '@shared/ui/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@shared/ui/Typography';
import Link from 'next/link';
import mobile from './PizzaCardMobile.module.scss';
import { PizzaCardInterface } from '../interface';

export const PizzaCardMobile = ({
  type,
  name,
  img,
  description,
  badge,
  price,
  pathname,
}: PizzaCardInterface) => (
  <Card className={mobile['pizza-card']}>
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
          <Button appearance='light-primary' height={36}>
            {type === 'pizza' ? `от ${price} ₽` : `${price} ₽`}
          </Button>
        </Link>
      </div>
    </div>
  </Card>
);
