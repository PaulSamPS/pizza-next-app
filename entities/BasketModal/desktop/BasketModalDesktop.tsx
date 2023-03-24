import React from 'react';
import Link from 'next/link';
import { Bottom, Divider, Title } from '@shared/ui';
import styles from './BasketModalDesktop.module.scss';
import { BasketModalProps } from '../type';

export const BasketModalDesktop = ({
  closeButton,
  closeModal,
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
      <Link href={linkTo} onClick={closeModal}>
        <Bottom
          totalPrice={basket?.totalPrice!}
          className={styles.bot}
          handleClick={() => {}}
        >
          Оформить заказ
        </Bottom>
      </Link>
    </div>
  </>
);
