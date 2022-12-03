import * as React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface ParagraphProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent {
  weight?: '1' | '2' | '3';
}
