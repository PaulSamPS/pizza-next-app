import React from 'react';
import styles from './AuthDesktop.module.scss';

interface AuthMobileProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const AuthMobile = ({ children }: AuthMobileProps) => (
  <form className={styles.form}>{children}</form>
);
