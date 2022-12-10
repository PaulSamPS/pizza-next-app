import React from 'react';
import { Block, Button, Container, Divider } from '@components/Blocks';
import cx from 'clsx';
import { Select } from '@components/Form';
import { LocationIcon } from '@helpers/icons/20';
import { Text } from '@components/Typography';
import { Logo } from './components';
import styles from './styles/mobile.module.scss';

const city = ['Москва', 'Оренбург'];

export const HeaderMobile = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
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
          <Button
            appearance='transparent'
            type='button'
            className={cx(styles.burger, open && styles['burger-open'])}
            onClick={() => setOpen(!open)}
          >
            <span />
            <span />
            <span />
          </Button>
        </div>
      </Container>
      <Divider />
    </Block>
  );
};
