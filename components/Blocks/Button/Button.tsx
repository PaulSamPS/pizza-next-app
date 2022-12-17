import React from 'react';
import cx from 'clsx';
import { Icon } from '@components/Blocks';
import styles from './Button.module.scss';
import { Spinner } from '../Spinner/Spinner';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance:
    | 'primary'
    | 'secondary'
    | 'transparent'
    | 'outline-gray'
    | 'light-primary';
  loading?: boolean;
  before?: React.ReactNode;
  width?: number;
  height?: number;
}

export const Button = ({
  className,
  appearance,
  before,
  loading,
  height,
  width,
  children,
  ...restProps
}: ButtonProps) => {
  const classes = cx(className, styles.button, styles[appearance]);

  return (
    <button
      type='button'
      className={classes}
      style={{ width, height }}
      {...restProps}
    >
      {loading && <Spinner />}
      {before && <Icon>{before}</Icon>}
      {children && children}
    </button>
  );
};
