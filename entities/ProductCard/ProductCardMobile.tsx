import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import { IProduct } from '@types';
import Link from 'next/link';
import mobile from './styles/mobile.module.scss';

type ProductCardMobileProps = {
  product: IProduct;
};

export const ProductCardMobile = ({ product }: ProductCardMobileProps) => (
  <Card className={mobile['product-card']}>
    {product.badge && <Badge>New</Badge>}
    <Image
      src={`http://localhost:5000/product/${product.name}/${product.img.regular}`}
      alt='pizza'
      width={100}
      height={100}
    />
    <div className={mobile.info}>
      <Title level='3' weight='w1' className={mobile.name}>
        {product.name}
      </Title>
      <Paragraph className={mobile.text}>{product.description}</Paragraph>
      <div className={mobile.bottom}>
        <Link href={`/?${product.type}=${product.pathname}`}>
          <Button appearance='light-primary'>от 399 ₽</Button>
        </Link>
      </div>
    </div>
  </Card>
);
