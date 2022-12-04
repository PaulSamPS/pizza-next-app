import React from 'react';
import { classNames } from '@lib';
import { TabsGridProps } from './TabsGrid.props';

export const TabsGrid = ({ children, column = '3' }: TabsGridProps) => (
  <div
    className={classNames('tabs-grid', column && `tabs-grid-column-${column}`)}
  >
    {children}
  </div>
);
