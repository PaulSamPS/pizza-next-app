import React from 'react';
import cx from 'clsx';
import { GridProps } from './Grid.props';
import styles from './Grid.module.scss';
import stylesMobile from './GridMobile.module.scss';

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
