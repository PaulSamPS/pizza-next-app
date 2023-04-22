import React from 'react';
import { Button, Card, Badge } from '@shared/ui/Blocks';
import { Paragraph, Title } from '@shared/ui/Typography';
import Image from 'next/image';
import Link from 'next/link';
import { Count } from '@features';
import { useAddToBasket } from '@shared/hooks';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';
import { BasketProductType } from '@shared/types';
import desktop from './ProductCardDesktop.module.scss';
import { ProductCardInterface } from '../interface';

export const ProductCardDesktop = ({ item }: ProductCardInterface) => {
  const { addItemToBasket } = useAddToBasket();
  const { basket } = useSelector(basketState);
  const [count, setCount] = React.useState<number>(0);

  React.useEffect(() => {
    if (basket.products) {
      const currentItem: BasketProductType | undefined = basket.products
        .filter((f) => f.product)
        .find((p) => p.product._id.toString() === item.id);
      setCount(currentItem?.qty ? currentItem.qty : 0);
    }
  }, [basket]);

  return (
    <Card className={desktop['product-card']}>
      {item.badge && <Badge>{item.badge}</Badge>}
      <Link href={`/?${item.type}=${item.pathname}`}>
        <Image
          src={`http://localhost:5000/product/${item.name}/${item.img}`}
          alt='pizza'
          width={300}
          height={300}
        />
      </Link>
      <div className={desktop.body}>
        <Title level='3' weight='w1' className={desktop.name}>
          {item.name}
        </Title>
        <Paragraph className={desktop.text}>{item.description}</Paragraph>
        <div className={desktop.bottom}>
          {count ? (
            <Count count={count} item={item} height={48} />
          ) : (
            <Button
              appearance='primary'
              height={48}
              width={130}
              onClick={() => addItemToBasket(item.id, item.price)}
            >
              В корзину
            </Button>
          )}
          <Title level='5' className={desktop.price}>
            {`${item.price} ₽`}
          </Title>
        </div>
      </div>
    </Card>
  );
};
