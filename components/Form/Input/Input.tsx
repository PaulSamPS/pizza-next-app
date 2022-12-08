import React, { ForwardedRef, forwardRef } from 'react';
import { classNames } from '@lib';
import cx from 'clsx';
import { Button } from '@components/Blocks';
import { Text } from '@components/Typography';
import { ArrowDownIcon, CalendarIcon, LocationIcon, SendIcon } from './assets';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  appearance:
    | 'text'
    | 'money'
    | 'date'
    | 'time'
    | 'empty'
    | 'btn'
    | 'icon-button'
    | 'code';
  error?: string;
}

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
  ) => {
    const text = appearance === 'text' && (
      <label className={styles[appearance]} htmlFor={appearance}>
        {children}
      </label>
    );

    const money = appearance === 'money' && (
      <label className={cx(styles[appearance])} htmlFor={appearance}>
        <span>₽</span>
      </label>
    );

    const date = appearance === 'date' && (
      <label className={cx(styles[appearance])} htmlFor={appearance}>
        <CalendarIcon />
      </label>
    );

    const time = appearance === 'time' && (
      <label className={cx(styles[appearance])} htmlFor={appearance}>
        <ArrowDownIcon />
      </label>
    );

    const btn = appearance === 'btn' && (
      <Button appearance='primary' type='submit'>
        <SendIcon />
      </Button>
    );

    const iconBtn = appearance === 'icon-button' && (
      <>
        <label className={cx(styles[appearance])} htmlFor={appearance}>
          <LocationIcon />
        </label>
        <Button appearance='primary' type='submit'>
          <SendIcon />
        </Button>
      </>
    );

    return (
      <div
        className={classNames(
          styles.input,
          styles[appearance],
          error && styles.error
        )}
      >
        {text}
        {money}
        {date}
        {time}
        {btn}
        {iconBtn}
        <input
          ref={ref}
          id={appearance}
          type={type}
          placeholder={placeholder}
          autoComplete='off'
          {...restProps}
        />
        {error && <Text level='l2'>{error}</Text>}
      </div>
    );
  }
);
