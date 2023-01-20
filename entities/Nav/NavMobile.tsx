import React from 'react';
import { Block, Button, Container, Divider } from '@components/Blocks';
import cx from 'clsx';
import Link from 'next/link';
import styles from './NavMobile.module.scss';
import { Logo } from '../Header/components';
import { MenuMobile } from '../MenuMobile/MenuMobile';

export const NavMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

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
