import { Button, Container, Input, Text } from '@components';
import React from 'react';

export default function Home() {
  return (
    <Container>
      <Button appearance='cart'>2530 р</Button>
      <Text level='l1'>text</Text>
      <Input appearance='icon-button' placeholder='Промокод' />
    </Container>
  );
}
