import * as React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface CardProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  direction?: 'column' | 'row';
  appearance?: 'outline' | 'white';
  navHeader?: boolean;
}
