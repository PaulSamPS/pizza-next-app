import React from 'react';
import { classNames } from '@lib';
import { ButtonProps } from './Button.props';
import { SpinnerIcon, FilterIcon, CartIcon } from './assets';
import { Text } from '../Text/Text';

export const Button = ({
  appearance,
  tabActive,
  children,
  icon,
  ...restProps
}: ButtonProps): JSX.Element => (
  <button
    type='button'
    className={classNames(
      'button',
      `button-${appearance}`,
      tabActive && 'button-tab-active'
    )}
    {...restProps}
  >
    {appearance === 'icon' && icon}
    {appearance === 'filter' && <FilterIcon />}
    {appearance === 'cart' && <CartIcon />}
    {appearance === 'loading' && (
      <span role='status' aria-label='Загружается...' className='spinner'>
        <SpinnerIcon aria-hidden='true' className='spinner-self' />
      </span>
    )}
    {children && <Text level='3'>{children}</Text>}
  </button>
);
