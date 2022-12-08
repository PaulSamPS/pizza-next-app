import React, { ForwardedRef, forwardRef } from 'react';
import { Text } from '@components/Typography';
import { RadioProps } from './Radio.props';
import styles from './Radio.module.scss';

export const Radio = forwardRef(
  (
    { children, id, ...restProps }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className={styles.radio}>
      <input
        ref={ref}
        type='radio'
        id={id}
        name='radio-group'
        value={children?.toString()}
        {...restProps}
      />
      <label htmlFor={id}>
        <Text level='l3'>{children}</Text>
      </label>
    </div>
  )
);
