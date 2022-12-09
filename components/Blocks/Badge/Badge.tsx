import React from 'react';
import { HasComponent } from '@types';
import { Text } from '@components/Typography';
import styles from './Badge.module.scss';

interface BadgeProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {}

export const Badge = ({
  children,
  Component = 'span',
  ...restProps
}: BadgeProps) => (
  <Component className={styles.badge} {...restProps}>
    <Text level='l3' className={styles.text}>
      {children}
    </Text>
  </Component>
);
