import React from 'react';
import { Button } from '@components';
import { MinusIcon, PlusIcon } from '@helpers/icons/8';
import { CountProps } from './Count.props';
import styles from './Count.module.scss';

export const Count = ({ count, decrease, increase }: CountProps) => (
  <div className={styles.count}>
    <Button appearance='count' onClick={decrease} disabled={count <= 0}>
      <MinusIcon />
    </Button>
    <div className={styles.value}>{count}</div>
    <Button appearance='count' onClick={increase}>
      <PlusIcon />
    </Button>
  </div>
);
