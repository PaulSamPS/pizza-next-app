import React, { useContext } from 'react';
import { AccountIcon } from '@shared/assets/icons/20';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { userState } from '@shared/store/selector';
import { DeviceContext } from '@shared/context';
import { Icon } from '@shared/ui/Blocks';
import { Text } from '@shared/ui/Typography';
import desktop from './styles/LoginDesktop.module.scss';
import mobile from './styles/LoginMobile.module.scss';

export const Login = () => {
  const router = useRouter();
  const { user } = useSelector(userState);
  const { isDesktop } = useContext(DeviceContext);

  const linkDevice = isDesktop ? '/cabinet' : '';
  const linkTo = user.phone ? linkDevice : `${router.pathname}?auth=login`;

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
