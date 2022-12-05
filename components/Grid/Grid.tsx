import React from 'react';
import { classNames } from '@lib';
import { GridProps } from './Grid.props';

export const Grid = ({
  children,
  Component = 'div',
  gap,
  col,
  ...restProps
}: GridProps) => (
  <Component
    className={classNames('grid', `col-${col}`)}
    style={{ columnGap: gap }}
    {...restProps}
  >
    {children}
  </Component>
);
