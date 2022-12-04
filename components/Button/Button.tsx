import React from 'react';
import { classNames } from '@lib';
import { ButtonProps } from './Button.props';
import { ArrowBackIcon, SpinnerIcon, FilterIcon } from './assets';

export const Button = ({
  appearance,
  tabActive,
  children,
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
    {appearance === 'icon' && <ArrowBackIcon />}
    {appearance === 'filter' && <FilterIcon />}
    {appearance === 'loading' && (
      <span role='status' aria-label='Загружается...' className='spinner'>
        <SpinnerIcon aria-hidden='true' className='spinner-self' />
      </span>
    )}
    {children && children}
  </button>
);
