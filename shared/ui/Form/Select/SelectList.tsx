import React from 'react';
import cx from 'clsx';
import { TypeAttributes } from '@shared/types';
import { SelectProps, Text } from '@shared/ui';
import styles from './styles/SelectList.module.scss';
import { UseSelect } from './hooks/useSelect';

interface SelectListProps
  extends Pick<SelectProps, 'editable' | 'position' | 'arr' | 'appearance'>,
    Omit<UseSelect, 'selectRef'> {
  level?: TypeAttributes.Level;
}

export const SelectList = ({
  editable,
  onClickSelectItem,
  showItems,
  show,
  value,
  position,
  arr,
  level,
  appearance,
}: SelectListProps) => (
  <ul
    className={cx(
      styles.list,
      show && styles.show,
      position && styles[position],
      styles[appearance]
    )}
    role='menu'
  >
    {arr.map((c) => (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <li
        key={c}
        onClick={editable ? () => onClickSelectItem(c) : showItems}
        className={cx(styles.item, value === c && editable && styles.active)}
        role='menuitem'
      >
        <Text level={level}>{c}</Text>
      </li>
    ))}
  </ul>
);
