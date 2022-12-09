import React from 'react';
import { GetServerSideProps } from 'next';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { withLayout } from '@hoc';
import { TemplateHeader } from '@templates/Header';
import { Button, Container, Count } from '@components/Blocks';
import { Input, Select } from '@components/Form';
import { Category, ProductCard, RadioGroup } from '@entities';
import { LocationIcon, SendIcon } from '@helpers/icons/20';
import { CalendarIcon } from '@helpers/icons/16';
import { BasketProduct } from '../entities/BasketProduct';

const a = ['first', 'second', 'third'];

const radioGr = [
  { id: '1', name: 'Быстрее' },
  { id: '2', name: 'По времени' },
];

function Home() {
  return (
    <>
      <TemplateHeader />
      <Container>
        <Category />
        <Select
          appearance='border'
          arr={a}
          editable
          placeholder='Выберите ресторан'
        />
        <Input
          id='address'
          placeholder='Адрес'
          before={<LocationIcon />}
          button={
            <Button appearance='primary' height={48}>
              <SendIcon />
            </Button>
          }
        />
        <ProductCard />
        <BasketProduct size='small' />
        <Input id='money' after={<CalendarIcon />} placeholder='Дата' />
        <Input id='money' after={<span>P</span>} placeholder='0' />
        <Count count={12} decrease={() => {}} increase={() => {}} />
        <RadioGroup items={radioGr} />
      </Container>
    </>
  );
}

export default withLayout(Home);

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'];

  const { isDesktop } = getSelectorsByUserAgent(userAgent!);
  return {
    props: { isDesktop },
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface HomeProps extends Record<string, unknown> {
  isDesktop: boolean;
}
