import React, { useContext } from 'react';
import cx from 'clsx';
import Link from 'next/link';
import {
  BasketButtonMobile,
  Block,
  Button,
  Container,
  Divider,
} from '@shared/ui';
import { getBasket } from '@shared/api/getBasket/getBasket';
import { useAppDispatch } from '@shared/hooks';
import { DeviceContext } from '@shared/context';
import { useSelector } from 'react-redux';
import { basketModalState, basketState } from '@shared/store/selector';
import { setBasketModalIsOpened } from '@shared/store/slices/basketModal.slice';
import { useRouter } from 'next/router';
import { MenuMobile } from '../../MenuMobile/MenuMobile';
import { Logo } from '../../Header/components';
import styles from './NavMobile.module.scss';

export const NavMobile = () => {
  const { isDesktop } = useContext(DeviceContext);
  const { basket } = useSelector(basketState);
  const { basketModalIsOpened } = useSelector(basketModalState);
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleOpenModalBasket = () => {
    dispatch(setBasketModalIsOpened(true));
  };

  React.useEffect(() => {
    dispatch(getBasket());
  }, []);

  return (
    <Block>
      <Container>
        <div className={styles.nav}>
          <Link href='/'>
            <Logo />
          </Link>
          <Button
            appearance='transparent'
            type='button'
            className={cx(styles.burger, isOpen && styles['burger-open'])}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span />
            <span />
            <span />
          </Button>
        </div>
      </Container>
      <Divider />
      <MenuMobile isOpened={isOpen} />
      {!isDesktop &&
        !basketModalIsOpened &&
        router.pathname !== '/checkout' && (
          <BasketButtonMobile
            count={basket ? basket.totalCount : 0}
            openBasket={handleOpenModalBasket}
          />
        )}
    </Block>
  );
};
