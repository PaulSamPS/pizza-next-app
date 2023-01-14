import React from 'react';
import Image from 'next/image';
import { Button, Icon } from '@components/Blocks';
import { CloseIcon32 } from '@helpers/icons/32';
import { useRouter } from 'next/router';
import { Text } from '@components/Typography';
import { PizzaCustomizationTitle } from '../../PizzaCustomization/components';
import styles from './ProductCardMobile.module.scss';
import { ProductCardModalProps } from '../interface';

export const ProductCardModalMobile = ({
  name,
  img,
  price,
  description,
  weight,
  promotion,
}: ProductCardModalProps) => {
  const router = useRouter();
  return (
    <div className={styles.card}>
      <Icon className={styles['close-icon']} onClick={() => router.push('/')}>
        <CloseIcon32 />
      </Icon>
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
        <Button appearance='primary' height={40}>
          {`Добавить в корзину за ${price} ₽`}
        </Button>
      </div>
    </div>
  );
};
