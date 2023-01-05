import React from 'react';
import { Button, Icon } from '@components/Blocks';
import { CartIcon } from '@helpers/icons/24';
import { useAppDispatch } from '@hooks';
import styles from './BasketButtonMobile.module.scss';
import { setBasketModalIsOpened } from '../../../store/slices/basketModal.slice';

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
