import React from 'react';
import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';

export const Container = ({ children, ...restProps }: ContainerProps) => (
  <div className={styles.container} {...restProps}>
    {children}
  </div>
);
