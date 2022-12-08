import React from 'react';

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: 'fast' | 'onTime';
}
