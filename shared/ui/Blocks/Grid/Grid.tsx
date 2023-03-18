import React from 'react';
import cx from 'clsx';
import { HasComponent, HasRootRef } from '@shared/types';
import styles from './Grid.module.scss';
import stylesMobile from './GridMobile.module.scss';

export interface GridProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent,
    HasRootRef<HTMLElement> {
  col?: 'col2' | 'col3' | 'col4' | 'col5' | 'col6' | 'col7' | 'col8' | 'col9';
  colAuto?:
    | 'col2auto'
    | 'col3auto'
    | 'col4auto'
    | 'col5auto'
    | 'col6auto'
    | 'col7auto'
    | 'col8auto'
    | 'col9auto';
  content?: 'content-end';
  columnGap?: number;
  rowGap?: number;
  width?: number;
  isDesktop?: boolean;
}

export const Grid = ({
  children,
  Component = 'div',
  col,
  colAuto,
  columnGap,
  rowGap,
  width,
  isDesktop = true,
  getRootRef,
  content,
  className,
  ...restProps
}: GridProps) => {
  const classes = cx(
    styles.grid,
    col && styles[col],
    colAuto && styles[colAuto],
    content && styles[content]
  );

  const classesMobile = stylesMobile.flex;

  return (
    <Component
      ref={getRootRef}
      className={cx(className, isDesktop ? classes : classesMobile)}
      style={{ columnGap, rowGap, width }}
      {...restProps}
    >
      {children}
    </Component>
  );
};
