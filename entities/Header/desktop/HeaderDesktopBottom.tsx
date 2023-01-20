import React from 'react';
import cx from 'clsx';
import Link from 'next/link';
import { CategoryHeader } from '@entities';
import { Button, Container, Divider } from '@components/Blocks';
import { CartIcon } from '@helpers/icons/24';
import { useAppDispatch, useScrollY } from '@hooks';
import { setBasketModalIsOpened } from '@store/slices/basketModal.slice';
import { useRouter } from 'next/router';
import { Logo } from '../components';
import styles from './HeaderDesktopBottom.module.scss';

type CategoryHeaderDesk = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

type HeaderDesktopBottomProps = {
  category: CategoryHeaderDesk[];
};

export const HeaderDesktopBottom = ({ category }: HeaderDesktopBottomProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const scrollY = useScrollY();

  const handleOpenModalCart = async () => {
    if (router.pathname === '/') {
      dispatch(setBasketModalIsOpened(true));
    } else {
      await router.push('/basket');
    }
  };

  return (
    <div className={cx(styles.bottom, scrollY >= 41 && styles.sticky)}>
      <Container>
        <div className={cx(styles.header, styles.bot)}>
          <Link href='/'>
            <Logo />
          </Link>
          <CategoryHeader category={category} />
          <Button
            appearance='primary'
            before={<CartIcon />}
            height={40}
            onClick={handleOpenModalCart}
          >
            22550 ₽
          </Button>
        </div>
      </Container>
      <Divider />
    </div>
  );
};
