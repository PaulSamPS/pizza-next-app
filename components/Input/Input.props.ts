import * as React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  appearance:
    | 'text'
    | 'money'
    | 'date'
    | 'time'
    | 'empty'
    | 'btn'
    | 'icon-button'
    | 'code';
  error?: string;
}
