import * as React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface TitleProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: '1' | '2' | '3';
  level?: '1' | '2' | '3' | '4' | '5';
  caps?: boolean;
}