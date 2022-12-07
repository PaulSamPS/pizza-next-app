import React from 'react';

interface HasComponent {
  Component?: React.ElementType;
}

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}

export interface GridProps
  extends React.AllHTMLAttributes<HTMLElement>,
    HasComponent,
    HasRootRef<HTMLElement> {
  col?: 'col2' | 'col3' | 'col4' | 'col5' | 'col6' | 'col7' | 'col8' | 'col9';
  colAuto?:
    | 'col2auto'
    | 'col3auto'
    | 'col4auto'
    | 'col5auto'
    | 'col6auto'
    | 'col7auto'
    | 'col8auto'
    | 'col9auto';
  content?: 'content-end';
  columnGap?: number;
  rowGap?: number;
  width?: number;
  isDesktop?: boolean;
}
