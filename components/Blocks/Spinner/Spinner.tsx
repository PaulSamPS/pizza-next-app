import React from 'react';
import { IconSpinner } from './assets';
import { SpinnerProps } from './Spinner.props';
import styles from './Spinner.module.scss';

export const Spinner = React.memo(
  ({
    position = 'relative',
    color,
    'aria-label': ariaLabel = 'Загружается...',
    ...restProps
  }: SpinnerProps) => (
    <span
      role='status'
      aria-label={ariaLabel}
      className={styles.spinner}
      style={{ position, color }}
      {...restProps}
    >
      <IconSpinner aria-hidden='true' className={styles.self} />
    </span>
  )
);
