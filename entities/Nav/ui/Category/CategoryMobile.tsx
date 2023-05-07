import React, { useContext } from 'react';
import { DeviceContext } from '@shared/context';
import { useAppDispatch, useScrollY } from '@shared/hooks';
import cx from 'clsx';
import { Text, Card } from '@shared/ui';
import { useRouter } from 'next/router';
import { setNavName } from '@shared/store/slices/nav.slice';
import desktop from './styles/desktop.module.scss';
import mobile from './styles/mobile.module.scss';

type ICategory = {
  id: number;
  name: string;
  icon: React.ReactNode;
};

type CategoryProps = {
  category: ICategory[];
};

export const CategoryMobile = ({ category }: CategoryProps) => {
  const { isDesktop } = useContext(DeviceContext);
  const scrollY = useScrollY();
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
    <nav
      className={cx(
        isDesktop ? desktop.category : mobile.category,
        scrollY >= 120 && desktop.none
      )}
    >
      {category.map((c) => (
        <Card
          Component='a'
          appearance='outline'
          key={c.id}
          tabIndex={0}
          className={isDesktop ? desktop.card : mobile.card}
          onClick={() => scrollToCategory(c.name)}
        >
          {c.icon}
          <Text level='l1' className={mobile.name}>
            {c.name}
          </Text>
        </Card>
      ))}
    </nav>
  );
};
