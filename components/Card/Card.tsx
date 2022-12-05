import React from 'react';
import { classNames } from '@lib';
import { CardProps } from './Card.props';

export const Card = ({
  children,
  appearance,
  Component = 'div',
  ...restProps
}: CardProps) => (
  <Component
    className={classNames('card', `card-${appearance}`)}
    {...restProps}
  >
    {children}
  </Component>
);
