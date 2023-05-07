import React from 'react';
import { Text, Select } from '@shared/ui';
import { useAppDispatch } from '@shared/hooks';
import { setNavName } from '@shared/store/slices/nav.slice';
import { useRouter } from 'next/router';
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

export const CategoryDesktop = ({ category }: CategoryHeaderProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const scrollToCategory = (name: string) => {
    if (router.pathname !== '/') {
      router.replace('/').then(() => {
        dispatch(setNavName(name));
      });
    } else {
      dispatch(setNavName(name));
    }
  };

  return (
    <nav className={styles.category}>
      {category.map((c) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <div
          role='link'
          tabIndex={0}
          key={c.id}
          onClick={() => scrollToCategory(c.name)}
        >
          <Text level='l2'>{c.name}</Text>
        </div>
      ))}
      <Select
        arr={another}
        position='center'
        placeholder='Другое'
        appearance='basic'
      />
    </nav>
  );
};
