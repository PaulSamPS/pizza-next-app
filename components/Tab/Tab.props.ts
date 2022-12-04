import * as React from 'react';

export interface TabProps extends React.AllHTMLAttributes<HTMLElement> {
  col?: '2' | '3';
  arr: string[];
}
