import * as React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface CardProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  appearance?: 'category';
}
