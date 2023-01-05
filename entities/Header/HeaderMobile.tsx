import React from 'react';
import { Block, Button, Container, Divider } from '@components/Blocks';
import cx from 'clsx';
import { Select } from '@components/Form';
import { LocationIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
import Link from 'next/link';
import { Logo } from './components';
import styles from './styles/HeaderMobile.module.scss';
import { MenuMobile } from '../MenuMobile/MenuMobile';

const city = ['Москва', 'Оренбург'];

export const HeaderMobile = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Block>
      <Container>
        <div className={cx(styles.header, styles.top)}>
          <Select
            appearance='basic'
            level='l1'
            arr={city}
            editable
            before={<LocationIcon />}
          />
          <Text level='l1'>
            Среднее время доставки*:
            <b> 00:24:19</b>
          </Text>
        </div>
      </Container>
      <Divider />
      <Container>
        <div className={cx(styles.header, styles.bot)}>
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
