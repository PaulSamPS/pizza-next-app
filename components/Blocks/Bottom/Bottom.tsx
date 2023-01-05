import React from 'react';
import { Text } from '@components/Typography';
import { Button } from '@components/Blocks';
import styles from './Bottom.module.scss';

interface BottomProps extends React.AllHTMLAttributes<HTMLDivElement> {
  totalPrice: number;
  gram?: string;
  buttonHeight?: number;
  buttonWidth?: number;
}
export const Bottom = ({
  totalPrice,
  gram,
  children,
  buttonHeight = 48,
  buttonWidth,
}: BottomProps) => (
  <div className={styles.bottom}>
    <div className={styles.total}>
      <Text className={styles.price} level='l3' weight='w1'>
        {`Итого: ${totalPrice} ₽`}
      </Text>
      {gram && <Text className={styles.gram}>{gram}</Text>}
    </div>
    <Button appearance='primary' height={buttonHeight} width={buttonWidth}>
      {children}
    </Button>
  </div>
);
