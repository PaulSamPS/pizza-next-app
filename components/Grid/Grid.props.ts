import React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface GridProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  col?: '3' | '8' | '9';
  gap?: number;
}
