import * as React from 'react';
import cx from 'clsx';
import { TextProps } from './Text.props';
import styles from './Text.module.scss';

export const Text = ({
  children,
  weight,
  level,
  icon,
  Component = 'span',
  className,
  center,
  ...restProps
}: TextProps) => {
  const classes = cx(
    className,
    styles.text,
    weight && styles[weight],
    level && styles[level],
    icon && styles.icon
  );

  return (
    <Component {...restProps} className={classes}>
      {icon && icon}
      {children}
    </Component>
  );
};
