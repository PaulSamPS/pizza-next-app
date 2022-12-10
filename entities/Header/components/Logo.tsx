import React from 'react';
import { LogoIcon } from '@helpers/icons/32';
import { Title } from '@components/Typography';
import { Icon } from '@components/Blocks';
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
