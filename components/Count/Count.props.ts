import * as React from 'react';

export interface CountProps extends React.AllHTMLAttributes<HTMLDivElement> {
  count: number;
  decrease: (e: React.MouseEvent<HTMLButtonElement>) => void;
  increase: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
