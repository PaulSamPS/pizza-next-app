import React from 'react';
import { LogoIcon } from '@shared/assets/icons/32';
import { Title, Icon } from '@shared/ui';
import styles from './styles/Logo.module.scss';

export const Logo = () => (
  <div className={styles.logo}>
    <Icon primary>
      <LogoIcon />
    </Icon>
    <Title level='1' caps className={styles.text}>
      Pizza
    </Title>
  </div>
);
