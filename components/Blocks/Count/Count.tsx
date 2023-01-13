import React from 'react';
import { Button } from '@components/Blocks';
import { MinusIcon, PlusIcon } from '@helpers/icons/8';
import styles from './Count.module.scss';

interface CountProps extends React.AllHTMLAttributes<HTMLDivElement> {
  count: number;
  decrease: () => void;
  increase: () => void;
  height?: number;
}

export const Count = ({
  count,
  decrease,
  increase,
  height = 36,
}: CountProps) => (
  <div className={styles.count}>
    <Button
      appearance='light-primary'
      height={height}
      onClick={decrease}
      disabled={count <= 1}
    >
      <MinusIcon />
    </Button>
    <div className={styles.value}>{count}</div>
    <Button appearance='light-primary' height={36} onClick={increase}>
      <PlusIcon />
    </Button>
  </div>
);
