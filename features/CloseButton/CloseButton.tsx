import React from 'react';
import { CloseIcon32 } from '@shared/assets/icons/32';
import { Icon } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import { setBasketModalIsOpened } from '@shared/store/slices/basketModal.slice';
import styles from './CloseButton.module.scss';

export const CloseButton = () => {
  const dispatch = useAppDispatch();
  const handleCloseBasketModal = () => {
    dispatch(setBasketModalIsOpened(false));
  };

  return (
    <Icon className={styles['close-icon']} onClick={handleCloseBasketModal}>
      <CloseIcon32 />
    </Icon>
  );
};
