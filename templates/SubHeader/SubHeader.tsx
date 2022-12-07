import React from 'react';
import { LogoIcon } from '@helpers/icons/32';
import { Title } from '@components';

export const SubHeader = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      columnGap: '12px',
      padding: '16px 0',
    }}
  >
    <LogoIcon />
    <Title level='l5' caps>
      Pizza
    </Title>
  </div>
);
