import React, { ForwardedRef, forwardRef } from 'react';
import { classNames } from '@lib';
import { Text } from '@components/Typography';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: 'address' | 'promo' | 'money' | 'date' | 'time' | 'code';
  text?: string;
  before?: React.ReactNode;
  after?: React.ReactNode;
  button?: React.ReactNode;
  error?: string;
}

export const Input = forwardRef(
  (
    {
      id,
      text,
      before,
      after,
      button,
      type,
      placeholder,
      error,
      children,
      ...restProps
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const textItem = (
      <label className={styles[id]} htmlFor={id}>
        {children}
      </label>
    );

    const beforeItem = (
      <label className={styles['before-item']} htmlFor={id}>
        {before}
      </label>
    );

    const afterItem = (
      <label className={styles['after-item']} htmlFor={id}>
        {after}
      </label>
    );

    const buttonItem = (
      <label className={styles.button} htmlFor={id}>
        {button}
      </label>
    );

    return (
      <div
        className={classNames(
          styles.input,
          before && styles.before,
          after && styles.after,
          error && styles.error
        )}
      >
        {before && beforeItem}
        {text && textItem}
        <input
          ref={ref}
          id={id}
          type={type}
          name={id}
          placeholder={placeholder}
          autoComplete='off'
          {...restProps}
        />
        {button && buttonItem}
        {after && afterItem}
        {error && <Text level='l2'>{error}</Text>}
      </div>
    );
  }
);
