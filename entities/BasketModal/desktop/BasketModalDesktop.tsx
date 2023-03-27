import React from 'react';
import { Bottom, Divider, Title } from '@shared/ui';
import styles from './BasketModalDesktop.module.scss';
import { BasketModalProps } from '../type';

export const BasketModalDesktop = ({
  closeButton,
  closeModal,
  basket,
  linkTo,
  children,
}: BasketModalProps) => {
  const disabled = basket?.products.length! > 0;

  return (
    <>
      <div className={styles.top}>
        <Title level='2'>Ваш заказ</Title>
        {closeButton}
      </div>
      <div className={styles.items}>{children}</div>
      <div className={styles.bottom}>
        <Divider />
        <Bottom
          totalPrice={basket ? basket.totalPrice : 0}
          className={styles.bot}
          handleClick={closeModal}
          disabled={!disabled}
          linkTo={linkTo}
        >
          Оформить заказ
        </Bottom>
      </div>
    </>
  );
};
