import React from 'react';
import cx from 'clsx';
import { Button, Container, Divider } from '@components/Blocks';
import Link from 'next/link';
import { CategoryHeader } from '@entities';
import { CartIcon } from '@helpers/icons/24';
import { useAppDispatch, useScrollY } from '@hooks';
import { useRouter } from 'next/router';
import { setBasketModalIsOpened } from '@store/slices/basketModal.slice';
import { getBasket } from '@packages/http/getBasket';
import { useSelector } from 'react-redux';
import { basketState } from '@store/selector';
import styles from './NavDesktop.module.scss';
import { Logo } from '../Header/components';

type INav = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

type NavDesktopProps = {
  category: INav[];
};

export const NavDesktop = ({ category }: NavDesktopProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const scrollY = useScrollY();
  const { basket } = useSelector(basketState);

  React.useEffect(() => {
    dispatch(getBasket());
  }, []);

  const handleOpenModalCart = async () => {
    if (router.pathname === '/') {
      dispatch(setBasketModalIsOpened(true));
    } else {
      await router.push('/basket');
    }
  };

  return (
    <nav className={cx(styles.nav, scrollY >= 41 && styles.sticky)}>
      <Container>
        <div className={styles.items}>
          <Link href='/'>
            <Logo />
          </Link>
          {router.pathname === '/' && <CategoryHeader category={category} />}
          <Button
            appearance='primary'
            before={<CartIcon />}
            height={40}
            onClick={handleOpenModalCart}
          >
            {basket?.totalPrice}
            {' '}
            ₽
          </Button>
        </div>
      </Container>
      <Divider />
    </nav>
  );
};
