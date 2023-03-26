import React from 'react';
import cx from 'clsx';
import Link from 'next/link';
import { Block, Button, Container, Divider } from '@shared/ui';
import { getBasket } from '@shared/api/getBasket/getBasket';
import { useAppDispatch } from '@shared/hooks';
import styles from './NavMobile.module.scss';
import { Logo } from '../../Header/components';
import { MenuMobile } from '../../MenuMobile/MenuMobile';

export const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();

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
    </Block>
  );
};
