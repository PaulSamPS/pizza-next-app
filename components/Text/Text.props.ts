import React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface TextProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: '1' | '2' | '3';
  level?: '1' | '2' | '3';
  center?: boolean;
  icon?: React.ReactNode;
}
