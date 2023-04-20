import React from 'react';
import cx from 'clsx';
import { IconSpinner } from './assets';
import { SpinnerProps } from './Spinner.props';
import styles from './Spinner.module.scss';

export const Spinner = React.memo(
  ({
    position = 'absolute',
    color,
    bg = 'black',
    'aria-label': ariaLabel = 'Загружается...',
    ...restProps
  }: SpinnerProps) => (
    <span
      role='status'
      aria-label={ariaLabel}
      className={cx(styles.spinner, styles[bg])}
      style={{ position, color }}
      {...restProps}
    >
      <IconSpinner aria-hidden='true' className={styles.self} />
    </span>
  )
);
