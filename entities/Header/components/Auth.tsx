import React from 'react';
import { Text } from '@components/Typography';
import { Icon } from '@components/Blocks';
import { AccountIcon } from '@helpers/icons/20';
import styles from './styles/Auth.module.scss';

export const Auth = () => (
  <div className={styles.auth}>
    <Text level='l3'>Время работы: с 11:00 до 23:00</Text>
    <div className={styles.login}>
      <Icon primary>
        <AccountIcon />
      </Icon>
      <Text level='l3'>Войти в аккаунт</Text>
    </div>
  </div>
);
