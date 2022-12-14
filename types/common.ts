import React from 'react';

export declare namespace TypeAttributes {
  type Weight = 'w1' | 'w2' | 'w3';
  type Level = 'l1' | 'l2' | 'l3';
  type LevelTitle = 'l1' | 'l2' | 'l3' | 'l4' | 'l5';
}

export interface HasComponent {
  Component?: React.ElementType;
}

export interface HasRootRef<T> {
  getRootRef?: React.Ref<T>;
}
