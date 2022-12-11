import React from 'react';
import { Text } from '@components/Typography';
import { Icon } from '@components/Blocks';
import { AccountIcon } from '@helpers/icons/20';
import styles from './styles/Auth.module.scss';

type AuthProps = {
  setModal: (modal: boolean) => void;
};

export const Auth = ({ setModal }: AuthProps) => (
  <div className={styles.auth}>
    <Text level='l3'>Время работы: с 11:00 до 23:00</Text>
    {/* eslint-disable-next-line max-len */}
    {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
    <div className={styles.login} onClick={() => setModal(true)}>
      <Icon primary>
        <AccountIcon />
      </Icon>
      <Text level='l3'>Войти в аккаунт</Text>
    </div>
  </div>
);
