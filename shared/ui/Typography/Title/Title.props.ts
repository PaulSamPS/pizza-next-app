import * as React from 'react';
import { TypeAttributes } from '@shared/types';

interface HasComponent {
  Component?: React.ElementType;
}

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: '1' | '2' | '3' | '4' | '5';
  caps?: boolean;
}
