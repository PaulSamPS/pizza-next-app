import React from 'react';
import Image from 'next/image';
import { Text, Button } from '@shared/ui';
import { useAddToBasket } from '@shared/hooks';
import { PizzaCustomizationTitle } from '../../../features/PizzaCustomization/components';
import styles from './ProductCardModalDesktop.module.scss';
import { ProductCardModalProps } from '../interface';

export const ProductCardModalDesktop = ({
  id,
  name,
  img,
  price,
  description,
  weight,
  promotion,
}: ProductCardModalProps) => {
  const { addItemToBasket } = useAddToBasket();

  return (
    <div className={styles.card}>
      <Image
        src={`http://localhost:5000/product/${name}/${img}`}
        alt='product'
        width={390}
        height={390}
      />
      <div className={styles.info}>
        <PizzaCustomizationTitle name={name} promotion={promotion} />
        {weight && (
          <Text level='l2' className={styles.weight}>
            {`${weight} г`}
          </Text>
        )}
        <Text level='l2' className={styles.desc}>
          {description}
        </Text>
        <Button
          appearance='primary'
          height={48}
          onClick={() => addItemToBasket(id, price)}
        >
          {`Добавить в корзину за ${price} ₽`}
        </Button>
      </div>
    </div>
  );
};
