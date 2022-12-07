import React from 'react';
import cx from 'clsx';
import { IconProps } from './Icon.props';
import styles from './Icon.module.scss';

export const Icon = ({
  Component = 'span',
  primary,
  children,
  ...restProps
}: IconProps) => (
  <Component
    className={cx(styles.icon, primary && styles.primary)}
    {...restProps}
  >
    {children}
  </Component>
);
