import React from 'react';
import cx from 'clsx';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';
import { Spinner } from '../Spinner/Spinner';

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
      {before && before}
      {children && children}
    </button>
  );
};
