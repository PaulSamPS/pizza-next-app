import React from 'react';
import { BasketType } from '@shared/types';

export interface BasketModalProps
  extends React.AllHTMLAttributes<HTMLDivElement> {
  closeButton: JSX.Element;
  closeModal: () => void;
  basket: BasketType | null;
  linkTo: string;
}
