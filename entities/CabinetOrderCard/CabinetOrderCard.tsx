import React from 'react';
import { Card } from '@components/Blocks';
import { Text } from '@components/Typography';
import styles from './CabinetOrderCard.module.scss';

export const CabinetOrderCard = () => {
  return (
    <div className={styles['order-card']}>
      <Card>
        <div className={styles.top}>
          <div className={styles.border} />
          <div className={styles.order}>
            <Text level='l1' className={styles.title}>
              Заказ
            </Text>
            <div className={styles.info}>
              <Text level='l2' className={styles.number}>
                №130312
              </Text>
              <Text level='l2' className={styles.date}>
                22.01.23
              </Text>
            </div>
          </div>
          <div className={styles.sum}>
            <Text level='l1' className={styles.title}>
              Сумма
            </Text>
            <Text level='l2'>399 ₽</Text>
          </div>
        </div>
      </Card>
    </div>
  );
};
