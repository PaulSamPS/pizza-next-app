import React from 'react';

export interface SelectProps extends React.AllHTMLAttributes<HTMLElement> {
  arr: string[];
  before?: React.ReactNode;
  position?: 'center' | 'basic';
  editable?: boolean;
  placeholder?: string;
}
