import React, { useContext } from 'react';
import { DeviceContext } from '@context';
import styles from './Block.module.scss';

interface BlockProps extends React.AllHTMLAttributes<HTMLElement> {}

export const Block = ({ children, ...restProps }: BlockProps) => {
  const { isDesktop } = useContext(DeviceContext);

  return (
    <div className={isDesktop ? styles.block : styles.mobile} {...restProps}>
      {children}
    </div>
  );
};
