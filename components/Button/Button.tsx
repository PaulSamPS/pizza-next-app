import React from 'react';
import cx from 'clsx';
import { ButtonProps } from './Button.props';
import { SpinnerIcon, FilterIcon, CartIcon } from './assets';
import { Text } from '../Text/Text';
import styles from './Button.module.scss';

export const Button = ({
  appearance,
  tabActive,
  children,
  icon,
  ...restProps
}: ButtonProps): JSX.Element => {
  const classes = cx(
    styles.button,
    styles[appearance],
    tabActive && styles.active
  );

  const ico = appearance === 'icon' && icon;
  const cart = appearance === 'cart' && <CartIcon />;
  const filter = appearance === 'filter' && <FilterIcon />;
  const loading = appearance === 'loading' && (
    <span role='status' aria-label='Загружается...' className='spinner'>
      <SpinnerIcon aria-hidden='true' className='spinner-self' />
    </span>
  );

  return (
    <button type='button' className={classes} {...restProps}>
      {ico}
      {cart}
      {filter}
      {loading}
      {children && <Text level='l3'>{children}</Text>}
    </button>
  );
};
