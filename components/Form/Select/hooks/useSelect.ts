import React from 'react';
import { useOnClickOutside } from '@hooks';

export interface UseSelect {
  value: string;
  show: boolean;
  onClickSelectItem: (value: string) => void;
  selectRef: React.LegacyRef<HTMLDivElement> | undefined;
  showItems: () => void;
}

export const useSelect = (
  arr: string[],
  placeholder: string | undefined
): UseSelect => {
  const [value, setValue] = React.useState<string>(placeholder || arr[0]);
  const [show, setShow] = React.useState<boolean>(false);
  const selectRef = React.useRef<HTMLDivElement | null>(null);
  useOnClickOutside(selectRef, () => setShow(false));

  const onClickSelectItem = (item: string) => {
    setValue(item);
    setShow(false);
  };

  const showItems = () => {
    setShow(!show);
  };

  return { value, show, onClickSelectItem, selectRef, showItems };
};
