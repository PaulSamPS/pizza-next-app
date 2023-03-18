import React from 'react';
import cx from 'clsx';
import { HasComponent, HasRootRef } from '@shared/types';
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
  className,
  ...restProps
}: IconProps) => (
  <Component
    className={cx(className, styles.icon, primary && styles.primary)}
    {...restProps}
  >
    {children}
  </Component>
);
