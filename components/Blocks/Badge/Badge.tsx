import React from 'react';
import { HasComponent } from '@types';
import { Text } from '@components/Typography';
import styles from './Badge.module.scss';

interface BadgeProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  top?: string;
}

export const Badge = ({
  children,
  Component = 'span',
  top = '20px',
  ...restProps
}: BadgeProps) => (
  <Component className={styles.badge} style={{ top }} {...restProps}>
    <Text level='l3' className={styles.text}>
      {children}
    </Text>
  </Component>
);
