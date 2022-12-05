import React from 'react';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import { Flex, Text } from '@components';
import { LocationIcon } from '@helpers/icons/20';

export const Location = () => (
  <Flex align='center' columnGap={8}>
    <LocationIcon />
    <Text icon={<ArrowDownSmallIcon />} Component='a'>
      Москва
    </Text>
  </Flex>
);
