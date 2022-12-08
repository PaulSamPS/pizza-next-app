import * as React from 'react';
import { TypeAttributes } from '@types';

interface HasComponent {
  Component?: React.ElementType;
}

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: TypeAttributes.LevelTitle;
  caps?: boolean;
}
