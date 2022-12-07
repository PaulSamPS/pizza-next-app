import React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface IconProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  primary?: boolean;
}
