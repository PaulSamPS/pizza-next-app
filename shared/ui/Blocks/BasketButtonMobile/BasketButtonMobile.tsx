import React from 'react';
import { CartIcon } from '@shared/assets/icons/24';
import { useAppDispatch } from '@shared/hooks';
import { setBasketModalIsOpened } from '@shared/store/slices/basketModal.slice';
import { Button, Icon } from '@shared/ui';
import styles from './BasketButtonMobile.module.scss';

export const BasketButtonMobile = () => {
  const dispatch = useAppDispatch();

  const handleOpenModalCart = () => {
    dispatch(setBasketModalIsOpened(true));
  };

  return (
    <Button
      appearance='primary'
      className={styles.cart}
      onClick={handleOpenModalCart}
    >
      <Icon>
        <CartIcon />
      </Icon>
      <div className={styles.count}>1</div>
    </Button>
  );
};
