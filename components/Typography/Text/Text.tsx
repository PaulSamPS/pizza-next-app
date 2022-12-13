import * as React from 'react';
import cx from 'clsx';
import { useContext } from 'react';
import { DeviceContext } from '@context';
import { TextProps } from './Text.props';
import styles from './Text.module.scss';

export const Text = ({
  children,
  weight,
  level,
  icon,
  Component = 'span',
  center,
  error,
  className,
  ...restProps
}: TextProps) => {
  const { isDesktop } = useContext(DeviceContext);

  const classes = cx(
    className,
    styles.text,
    weight && styles[weight],
    level && isDesktop ? styles[level] : styles[`mobile-${level}`],
    icon && styles.icon,
    error && styles.error
  );

  return (
    <Component {...restProps} className={classes}>
      {icon && icon}
      {children}
    </Component>
  );
};
