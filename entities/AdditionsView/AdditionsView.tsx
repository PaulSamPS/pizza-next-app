import React from 'react';
import { AdditionsType } from '@shared/types';
import { AdditionsList } from '@features';
import { AdditionCard } from '../AdditionCard/AdditionCard';

type AdditionsViewProps = {
  arr: AdditionsType[];
};

export const AdditionsView = ({ arr }: AdditionsViewProps) => (
  <AdditionsList item={arr}>
    {arr.map((a) => (
      <AdditionCard key={a.id} addition={a} />
    ))}
  </AdditionsList>
);
