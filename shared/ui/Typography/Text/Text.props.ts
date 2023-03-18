import React from 'react';
import { TypeAttributes } from '@shared/types';

interface HasComponent {
  Component?: React.ElementType;
}

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
  level?: TypeAttributes.Level;
  center?: boolean;
  icon?: React.ReactNode;
  error?: boolean;
}
