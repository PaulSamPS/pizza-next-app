import React, { useContext } from 'react';
import { Text } from '@components/Typography';
import { Icon } from '@components/Blocks';
import { AccountIcon } from '@helpers/icons/20';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { userState } from '@store/selector';
import { DeviceContext } from '@context';
import desktop from './styles/LoginDesktop.module.scss';
import mobile from './styles/LoginMobile.module.scss';

export const Login = () => {
  const router = useRouter();
  const { user } = useSelector(userState);
  const { isDesktop } = useContext(DeviceContext);

  const linkTo = user.phone ? '/cabinet' : `${router.pathname}?auth=login`;

  const classes = isDesktop ? desktop : mobile;

  return (
    <Link href={linkTo}>
      <div className={classes.login}>
        <Icon primary>
          <AccountIcon />
        </Icon>
        <Text level='l1'>{user.phone || 'Войти в аккаунт'}</Text>
      </div>
    </Link>
  );
};
