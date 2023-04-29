import React from 'react';
import { Bottom, Divider, Title } from '@shared/ui';
import styles from './BasketModalMobile.module.scss';
import { BasketModalProps } from '../type';

export const BasketModalMobile = ({
  closeModal,
  closeButton,
  basket,
  linkTo,
  children,
}: BasketModalProps) => (
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
        linkTo={linkTo}
      >
        Оформить заказ
      </Bottom>
    </div>
  </>
);
