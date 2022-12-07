import React from 'react';
import { TextProps } from '../../Text/Text.props';

export interface SelectProps
  extends React.AllHTMLAttributes<HTMLElement>,
    Pick<TextProps, 'level'> {
  arr: string[];
  before?: React.ReactNode;
  position?: 'center' | 'basic';
  editable?: boolean;
  placeholder?: string;
}
