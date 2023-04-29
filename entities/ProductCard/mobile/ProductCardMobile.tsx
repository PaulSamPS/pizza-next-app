import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, Badge } from '@shared/ui/Blocks';
import { Paragraph, Title } from '@shared/ui/Typography';
import { Count } from '@features';
import { BasketProductType } from '@shared/types';
import { useAddToBasket } from '@shared/hooks';
import { useSelector } from 'react-redux';
import { basketState } from '@shared/store/selector';
import { ProductCardInterface } from '../interface';
import mobile from './ProductCardMobile.module.scss';

export const ProductCardMobile = ({ item }: ProductCardInterface) => {
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
          {count ? (
            <Count count={count} item={item} height={32} />
          ) : (
            <Button
              appearance='light-primary'
              height={36}
              onClick={() => addItemToBasket(item.id, item.price)}
            >
              {`${item.price} ₽`}
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};
