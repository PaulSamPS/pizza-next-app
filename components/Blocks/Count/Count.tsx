import React from 'react';
import { Button } from '@components/Blocks';
import { MinusIcon, PlusIcon } from '@helpers/icons/8';
import styles from './Count.module.scss';

interface CountProps extends React.AllHTMLAttributes<HTMLDivElement> {
  count: number;
  decrease: (e: React.MouseEvent<HTMLButtonElement>) => void;
  increase: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Count = ({ count, decrease, increase }: CountProps) => (
  <div className={styles.count}>
    <Button
      appearance='light-primary'
      height={36}
      onClick={decrease}
      disabled={count <= 0}
    >
      <MinusIcon />
    </Button>
    <div className={styles.value}>{count}</div>
    <Button appearance='light-primary' height={36} onClick={increase}>
      <PlusIcon />
    </Button>
  </div>
);
