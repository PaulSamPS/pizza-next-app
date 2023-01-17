import React from 'react';
import { Text } from '@components/Typography';
import { Icon } from '@components/Blocks';
import { AccountIcon } from '@helpers/icons/20';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { userState } from '@store/selector';
import styles from './styles/Login.module.scss';

export const Login = () => {
  const router = useRouter();
  const { user } = useSelector(userState);

  const linkTo = user.phone ? '/cabinet' : `${router.pathname}?auth=login`;

  return (
    <div className={styles.auth}>
      <Text level='l1'>Время работы: с 11:00 до 23:00</Text>
      <Link href={linkTo}>
        <div className={styles.login}>
          <Icon primary>
            <AccountIcon />
          </Icon>
          <Text level='l1'>{user.phone || 'Войти в аккаунт'}</Text>
        </div>
      </Link>
    </div>
  );
};
