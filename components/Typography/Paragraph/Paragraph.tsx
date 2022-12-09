import * as React from 'react';
import cx from 'clsx';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.scss';

export const Paragraph = ({
  Component = 'p',
  weight,
  children,
  className,
  ...restProps
}: ParagraphProps) => {
  const classes = cx(className, styles.paragraph, weight && styles[weight]);

  return (
    <Component {...restProps} className={classes}>
      {children}
    </Component>
  );
};
