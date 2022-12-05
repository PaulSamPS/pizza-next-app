import React from 'react';
import { WhiteBlockProps } from './WhiteBlock.props';
import styles from './WhiteBlock.module.scss';

export const WhiteBlock = ({ children, ...restProps }: WhiteBlockProps) => (
  <div className={styles.white} {...restProps}>
    {children}
  </div>
);
