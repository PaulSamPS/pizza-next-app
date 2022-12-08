import React from 'react';
import cx from 'clsx';
import { HasComponent, HasRootRef } from '@types';
import styles from './Icon.module.scss';

export interface IconProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent,
    HasRootRef<HTMLElement> {
  primary?: boolean;
}

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
