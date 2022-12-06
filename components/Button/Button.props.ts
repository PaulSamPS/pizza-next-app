import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance:
    | 'primary'
    | 'secondary'
    | 'transparent'
    | 'outline'
    | 'overlay_primary';
  tabActive?: boolean;
  loading?: boolean;
  before?: React.ReactNode;
  width?: number;
  height?: number;
}
