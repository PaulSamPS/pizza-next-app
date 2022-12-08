import React from 'react';
import cx from 'clsx';
import { Icon } from '@components/Blocks';
import { Text } from '@components/Typography';
import styles from './Button.module.scss';
import { Spinner } from '../Spinner/Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance:
    | 'primary'
    | 'secondary'
    | 'transparent'
    | 'outline'
    | 'overlay_primary';
  tabActive?: boolean;
  loading?: boolean;
  before?: React.ReactNode;
  width?: number;
  height?: number;
}

export const Button = ({
  appearance,
  before,
  tabActive,
  loading,
  height,
  width,
  children,
  ...restProps
}: ButtonProps) => {
  const classes = cx(
    styles.button,
    styles[appearance],
    tabActive && styles.active
  );

  return (
    <button
      type='button'
      className={classes}
      style={{ width, height }}
      {...restProps}
    >
      {loading && <Spinner />}
      {before && <Icon>{before}</Icon>}
      {children && <Text level='l2'>{children}</Text>}
    </button>
  );
};
