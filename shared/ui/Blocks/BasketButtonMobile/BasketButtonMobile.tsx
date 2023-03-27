import React from 'react';
import { CartIcon } from '@shared/assets/icons/24';
import { Button, Icon } from '@shared/ui';
import styles from './BasketButtonMobile.module.scss';

type BasketButtonMobileProps = {
  openBasket: () => void;
  count: number;
};

export const BasketButtonMobile = ({
  openBasket,
  count,
}: BasketButtonMobileProps) => (
  <Button appearance='primary' className={styles.cart} onClick={openBasket}>
    <Icon>
      <CartIcon />
    </Icon>
    <div className={styles.count}>{count}</div>
  </Button>
);
