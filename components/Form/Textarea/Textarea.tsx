import React from 'react';
import cx from 'clsx';
import styles from './Textarea.module.scss';

export interface TextareaProps
  extends React.AllHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  height?: number;
}

export const Textarea = ({
  error,
  className,
  height = 200,
  ...restProps
}: TextareaProps): JSX.Element => (
  <div className={cx(className, styles.wrapper)}>
    <textarea
      className={cx(styles.textarea, {
        [styles.error]: error,
      })}
      style={{ height }}
      {...restProps}
    />
    {error && <span className={styles['error-message']}>{error}</span>}
  </div>
);
