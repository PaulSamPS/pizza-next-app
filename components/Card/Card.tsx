import React from 'react';
import { classNames } from '@lib';
import { CardProps } from './Card.props';

export const Card = ({
  children,
  direction,
  appearance,
  navHeader,
  Component = 'div',
  ...restProps
}: CardProps) => (
  <Component
    className={classNames(
      !navHeader && 'card',
      direction && !navHeader && `${direction}`,
      appearance && !navHeader && `card-${appearance}`,
      navHeader && 'nav-header'
    )}
    {...restProps}
  >
    {children}
  </Component>
);
