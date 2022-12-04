import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance:
    | 'primary'
    | 'transparent'
    | 'icon'
    | 'loading'
    | 'price'
    | 'count'
    | 'tab'
    | 'filter'
    | 'secondary'
    | 'cart';
  tabActive?: boolean;
  icon?: React.ReactNode;
}
