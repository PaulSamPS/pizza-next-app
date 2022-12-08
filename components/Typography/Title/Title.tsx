import * as React from 'react';
import cx from 'clsx';
import { TitleProps } from './Title.props';
import styles from './Title.module.scss';

export const Title = ({
  children,
  weight,
  level = 'l1',
  Component,
  caps,
  ...restProps
}: TitleProps) => {
  if (!Component) {
    Component = `h${level}` as React.ElementType;
  }

  const classes = cx(
    styles.title,
    styles[level],
    weight && styles[weight],
    caps && styles.uppercase
  );

  return (
    <Component {...restProps} className={classes}>
      {children}
    </Component>
  );
};
