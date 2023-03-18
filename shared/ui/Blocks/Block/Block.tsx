import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import cx from 'clsx';
import styles from './Block.module.scss';

interface BlockProps extends React.AllHTMLAttributes<HTMLElement> {}

export const Block = ({ children, className, ...restProps }: BlockProps) => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div
      className={cx(className, isDesktop ? styles.block : styles.mobile)}
      {...restProps}
    >
      {children}
    </div>
  );
};
