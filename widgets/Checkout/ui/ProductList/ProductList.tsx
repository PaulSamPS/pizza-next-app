import React, { useContext } from 'react';
import { Divider, Text, Title } from '@shared/ui';
import { CountBasket } from '@features';
import { BasketType } from '@shared/types';
import { CheckoutProduct } from '@entities';
import { DeviceContext } from '@shared/context';
import desktop from './ProductList.module.scss';
import mobile from './ProductListMobile.module.scss';

interface ProductListCheckout
  extends Pick<BasketType, 'products' | 'totalPrice'> {}

export const ProductList = ({ products, totalPrice }: ProductListCheckout) => {
  const { isDesktop } = useContext(DeviceContext);

  const classes = isDesktop ? desktop : mobile;

  return (
    <>
      <Title level='3'>Ваш Заказ</Title>
      <div className={classes.order}>
        {products.map((p, index) => (
          <CheckoutProduct
            key={index}
            size={isDesktop ? 'medium' : 'small'}
            item={p}
            pizza={p.pizza}
            product={p.product}
          >
            <CountBasket
              count={p.qty}
              pizza={p.pizza}
              product={p.product}
              item={p}
              size={p.size}
            />
          </CheckoutProduct>
        ))}
      </div>
      <Text level='l3' weight='w1' className={classes.sum}>
        {`Итого: ${totalPrice} ₽`}
      </Text>
      <Divider className={classes.divider} />
    </>
  );
};
