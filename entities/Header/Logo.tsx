import React from 'react';
import { LogoIcon } from '@helpers/icons/32';
import { Icon, Title } from '@components';
import styles from './styles/Logo.module.scss';

export const Logo = () => (
  <div className={styles.logo}>
    <Icon primary>
      <LogoIcon />
    </Icon>
    <Title level='l5' caps>
      Pizza
    </Title>
  </div>
);
