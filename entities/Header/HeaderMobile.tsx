import React from 'react';
import { Block, Button, Container, Divider } from '@components/Blocks';
import cx from 'clsx';
import { MenuIcon } from '@helpers/icons/32';
import { Select } from '@components/Form';
import { LocationIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
import { Logo } from './components';
import styles from './styles/mobile.module.scss';

const city = ['Москва', 'Оренбург'];

export const HeaderMobile = () => (
  <Block>
    <Container>
      <div className={cx(styles.header, styles.top)}>
        <Select
          appearance='basic'
          level='l3'
          arr={city}
          editable
          before={<LocationIcon />}
        />
        <Text level='l3'>
          Среднее время доставки*:
          <b> 00:24:19</b>
        </Text>
      </div>
    </Container>
    <Divider />
    <Container>
      <div className={cx(styles.header, styles.bot)}>
        <Logo />
        <Button appearance='transparent' before={<MenuIcon />} height={40} />
      </div>
    </Container>
    <Divider />
  </Block>
);
