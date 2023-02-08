import React from 'react';
import { Text } from '@components/Typography';
import styles from './CabinetOrderCard.module.scss';

interface CabinetOrderCardProps {
  title: string;
  value: string;
  date?: string;
}

export const CabinetOrderCard = ({
  date,
  value,
  title,
}: CabinetOrderCardProps) => (
  <div className={styles['order-card']}>
    <Text level='l1' className={styles.title}>
      {title}
    </Text>
    <div className={styles.info}>
      <Text level='l2' className={styles.number}>
        {value}
      </Text>
      {date && (
        <Text level='l2' className={styles.date}>
          22.01.23
        </Text>
      )}
    </div>
  </div>
);
