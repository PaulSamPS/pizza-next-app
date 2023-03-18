import React from 'react';

export interface FlexProps extends React.AllHTMLAttributes<HTMLElement> {
  justify?: 'justify-between' | 'justify-center';
  align?: 'align-center';
  direction?: 'direction-column';
  columnGap?: number;
}
