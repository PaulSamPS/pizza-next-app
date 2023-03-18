import React, { useContext } from 'react';
import Image from 'next/image';
import { IProductLocal } from '@shared/types';
import { DeviceContext } from '@shared/context';
import { Text } from '@shared/ui';
import desktop from './OrderedProducts.module.scss';
import mobile from './OrderedProductsMobile.module.scss';

interface OrderedProductsProps
  extends Pick<IProductLocal, 'img' | 'name' | 'price'> {}

export const OrderedProducts = ({ name, img, price }: OrderedProductsProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const classes = isDesktop ? desktop : mobile;

  return (
    <div className={classes.product}>
      <Image
        className={classes.img}
        src={`http://localhost:5000/product/${name}/${img}`}
        alt={name}
        width={40}
        height={40}
      />
      <Text level='l2' weight='w1' className={classes.name}>
        {name}
      </Text>
      <Text level='l1' className={classes.extra}>
        {name}
      </Text>
      <div className={classes.count}>
        <Text level='l2' weight='w1'>
          1 товар
        </Text>
      </div>
      <Text level='l2' weight='w1' className={classes.price}>
        {`${price} ₽`}
      </Text>
    </div>
  );
};
