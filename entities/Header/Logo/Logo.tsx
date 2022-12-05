import React from 'react';
import { LogoIcon } from '@helpers/icons/32';
import { Flex, Title } from '@components';

export const Logo = () => (
  <Flex align='center'>
    <LogoIcon />
    <Title level='5' caps>
      pizza
    </Title>
  </Flex>
);
