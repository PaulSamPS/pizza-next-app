import React, { ForwardedRef, forwardRef } from 'react';
import { classNames } from '@lib';
import { InputProps } from './Input.props';
import { Text } from '../Text/Text';
import { ArrowDownIcon, CalendarIcon, LocationIcon, SendIcon } from './assets';
import { Button } from '../Button/Button';

export const Input = forwardRef(
  (
    {
      appearance,
      type,
      placeholder,
      error,
      children,
      ...restProps
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div
      className={classNames(
        'input',
        `input-${appearance}`,
        error && 'input-error'
      )}
    >
      {appearance === 'text' && (
        <label
          className={classNames('input-label', `input-label-${appearance}`)}
          htmlFor={appearance}
        >
          {children}
        </label>
      )}
      {appearance === 'money' && (
        <label
          className={classNames('input-label', `input-label-${appearance}`)}
          htmlFor={appearance}
        >
          <span>₽</span>
        </label>
      )}
      {appearance === 'date' && (
        <label
          className={classNames('input-label', `input-label-${appearance}`)}
          htmlFor={appearance}
        >
          <CalendarIcon />
        </label>
      )}
      {appearance === 'time' && (
        <label
          className={classNames('input-label', `input-label-${appearance}`)}
          htmlFor={appearance}
        >
          <ArrowDownIcon />
        </label>
      )}
      {appearance === 'btn' && (
        <Button appearance='icon' type='submit' icon={<SendIcon />} />
      )}
      {appearance === 'icon-button' && (
        <>
          <label
            className={classNames('input-label', `input-label-${appearance}`)}
            htmlFor={appearance}
          >
            <LocationIcon />
          </label>
          <Button appearance='icon' type='submit' icon={<SendIcon />} />
        </>
      )}
      <input
        ref={ref}
        id={appearance}
        type={type}
        placeholder={placeholder}
        className={classNames('input-field', `input-field-${appearance}`)}
        autoComplete='off'
        {...restProps}
      />
      {error && <Text level='2'>{error}</Text>}
    </div>
  )
);
