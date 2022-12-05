import React from 'react';

export interface FlexProps extends React.AllHTMLAttributes<HTMLElement> {
  justifyC?: 'space-between' | 'center';
  align?: 'center';
  columnGap?: number;
}
