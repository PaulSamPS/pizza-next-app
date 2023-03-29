import React from 'react';
import cx from 'clsx';
import { Text, Button } from '@shared/ui';
import Link from 'next/link';
import styles from './Bottom.module.scss';

interface BottomProps extends React.AllHTMLAttributes<HTMLDivElement> {
  totalPrice: number;
  gram?: string | false;
  buttonHeight?: number;
  buttonWidth?: number;
  handleClick: () => void;
  disabled?: boolean;
  linkTo?: string;
}
export const Bottom = ({
  totalPrice,
  gram,
  children,
  buttonHeight = 48,
  buttonWidth,
  handleClick,
  disabled = false,
  linkTo = '/',
  className,
}: BottomProps) => (
  <div className={cx(styles.bottom, className)}>
    <div className={styles.total}>
      <Text className={styles.price} level='l3' weight='w1'>
        {`Итого: ${totalPrice} ₽`}
      </Text>
      {gram && <Text className={styles.gram}>{gram}</Text>}
    </div>
    <Button
      appearance='primary'
      height={buttonHeight}
      width={buttonWidth}
      onClick={handleClick}
      disabled={disabled}
    >
      {disabled ? children : <Link href={linkTo}>{children}</Link>}
    </Button>
  </div>
);
