import React from 'react';
import { useOnClickOutside } from '@hooks';

export interface UseSelect {
  location: string;
  show: boolean;
  onClickSelectItem: (value: string) => void;
  selectRef: React.LegacyRef<HTMLDivElement> | undefined;
  showItems: () => void;
}

export const useSelect = (arr: string[]): UseSelect => {
  const [location, setLocation] = React.useState<string>(arr[0]);
  const [show, setShow] = React.useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(selectRef, () => setShow(false));

  const onClickSelectItem = (loc: string) => {
    setLocation(loc);
    setShow(false);
  };

  const showItems = () => {
    setShow(!show);
  };

  return { location, show, onClickSelectItem, selectRef, showItems };
};
