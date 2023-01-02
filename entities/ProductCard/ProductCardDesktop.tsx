import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import { Paragraph, Title } from '@components/Typography';
import { IProduct } from '@types';
import Image from 'next/image';
import Link from 'next/link';
import desktop from './styles/desktop.module.scss';

type Product = {
  product: IProduct;
};

export const ProductCardDesktop = ({ product }: Product) => (
  <Card className={desktop['product-card']}>
    {product.badge && <Badge>{product.badge}</Badge>}
    <Image
      src={`http://localhost:5000/product/${product.name}/${product.img.regular}`}
      alt='pizza'
      width={300}
      height={300}
    />
    <div className={desktop.body}>
      <Title level='3' weight='w1' className={desktop.name}>
        {product.name}
      </Title>
      <Paragraph className={desktop.text}>{product.description}</Paragraph>
      <div className={desktop.bottom}>
        <Link href={`/?${product.type}=${product.pathname}`}>
          <Button appearance='primary' height={48} width={130}>
            Выбрать
          </Button>
        </Link>
        <Title level='5' className={desktop.price}>
          {`от ${product.price[0]} ₽`}
        </Title>
      </div>
    </div>
  </Card>
);
