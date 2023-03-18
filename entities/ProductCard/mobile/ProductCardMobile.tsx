import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Badge } from '@shared/ui/Blocks';
import { Paragraph, Title } from '@shared/ui/Typography';
import { Count } from '@features';
import mobile from './ProductCardMobile.module.scss';
import { ProductCardInterface } from '../interface';

export const ProductCardMobile = ({ item, inCart }: ProductCardInterface) => (
  <Card className={mobile['product-card']}>
    {item.badge && <Badge>{item.badge}</Badge>}
    <Link href={`/?${item.type}=${item.pathname}`}>
      <Image
        src={`http://localhost:5000/product/${item.name}/${item.img}`}
        alt='pizza'
        width={128}
        height={128}
      />
    </Link>
    <div className={mobile.info}>
      <Title level='3' weight='w1' className={mobile.name}>
        {item.name}
      </Title>
      <Paragraph className={mobile.text}>{item.description}</Paragraph>
      <div className={mobile.bottom}>
        {inCart ? (
          <Count count={1} item={item} />
        ) : (
          <Button appearance='light-primary' height={36}>
            {item.type === 'pizza' ? `от ${item.price} ₽` : `${item.price} ₽`}
          </Button>
        )}
      </div>
    </div>
  </Card>
);
