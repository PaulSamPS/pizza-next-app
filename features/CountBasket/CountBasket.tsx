import React from 'react';
import { MinusIcon, PlusIcon } from '@shared/assets/icons/8';
import { Button } from '@shared/ui';
import { useQty } from '@shared/hooks/useQty';
import styles from './CountBasket.module.scss';
import { CountBasketProps } from './type/countBasket.interface';

export const CountBasket = ({
  product,
  pizza,
  size,
  count,
  item,
  height = 36,
}: CountBasketProps) => {
  const { increase, decrease } = useQty();

  return (
    <div className={styles.count}>
      <Button
        appearance='light-primary'
        height={height}
        onClick={() => decrease({ pizza, product, size, item })}
        disabled={count! <= 1}
      >
        <MinusIcon />
      </Button>
      <div className={styles.value}>{count}</div>
      <Button
        appearance='light-primary'
        height={36}
        onClick={() => increase({ pizza, product, size, item })}
      >
        <PlusIcon />
      </Button>
    </div>
  );
};
