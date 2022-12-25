import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import { ModalProductCustomization } from '@entities';
import { IProduct } from '@types';
import desktop from './styles/desktop.module.scss';

type Product = {
  product: IProduct;
};

export const ProductCardDesktop = ({ product }: Product) => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <Card className={desktop['product-card']}>
      {product.badge && <Badge>{product.badge}</Badge>}
      <Image src={product.image.regular} alt='pizza' width={300} height={300} />
      <div className={desktop.body}>
        <Title level='3' weight='w1' className={desktop.name}>
          {product.name}
        </Title>
        <Paragraph className={desktop.text}>{product.description}</Paragraph>
        <div className={desktop.bottom}>
          <Button
            appearance='primary'
            height={48}
            width={130}
            onClick={() => setModal(true)}
          >
            Выбрать
          </Button>
          <Title level='5' className={desktop.price}>
            {`от ${product.price} ₽`}
          </Title>
        </div>
      </div>
      <ModalProductCustomization
        setModal={setModal}
        modal={modal}
        product={product}
      />
    </Card>
  );
};
