import React, { ForwardedRef, forwardRef } from 'react';
import cx from 'clsx';
import { FieldError } from 'react-hook-form';
import styles from './Textarea.module.scss';

export interface TextareaProps
  extends React.AllHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
  height?: number;
}

export const Textarea = forwardRef(
  (
    { error, className, height = 200, ...restProps }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => (
    <div className={cx(className, styles.wrapper)}>
      <textarea
        ref={ref}
        className={cx(styles.textarea, {
          [styles.error]: error,
        })}
        style={{ height }}
        {...restProps}
      />
      {error && (
        <span className={styles['error-message']}>{error.message}</span>
      )}
    </div>
  )
);
