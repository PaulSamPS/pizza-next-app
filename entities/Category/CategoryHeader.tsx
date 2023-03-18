import React from 'react';
import { Text, Select } from 'shared/ui';
import Link from 'next/link';
import styles from './styles/categoryHeader.module.scss';

const another = [
  'Акции',
  'Пользовательское соглашение',
  'О компании',
  'Условия гарантии',
  'Ресторан',
];

type Category = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

type CategoryHeaderProps = {
  category: Category[];
};

export const CategoryHeader = ({ category }: CategoryHeaderProps) => (
  <nav className={styles.category}>
    {category.map((c) => (
      <Link key={c.id} tabIndex={0} href='/'>
        <Text level='l2'>{c.name}</Text>
      </Link>
    ))}
    <Select
      arr={another}
      position='center'
      placeholder='Другое'
      appearance='basic'
    />
  </nav>
);
