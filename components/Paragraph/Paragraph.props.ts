import * as React from 'react';
import { TypeAttributes } from '@types';

interface HasComponent {
  Component?: React.ElementType;
}

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: TypeAttributes.Weight;
}
