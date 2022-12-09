import React, { ForwardedRef, forwardRef } from 'react';
import { Text } from '@components/Typography';
import styles from './Radio.module.scss';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  currentValue: string;
}

export const Radio = forwardRef(
  (
    { children, id, currentValue, ...restProps }: RadioProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => (
    <div className={styles.radio}>
      <input
        ref={ref}
        type='radio'
        id={id}
        name='radio-group'
        value={children?.toString()}
        checked={currentValue === children?.toString()}
        {...restProps}
      />
      <label htmlFor={id}>
        <Text level='l2'>{children}</Text>
      </label>
    </div>
  )
);
