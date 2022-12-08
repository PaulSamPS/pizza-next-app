import React from 'react';
import cx from 'clsx';
import { SelectProps } from '@components/Form/Select';
import styles from './styles/SelectList.module.scss';
import { UseSelect } from './hooks/useSelect';

interface SelectListProps
  extends Pick<SelectProps, 'editable' | 'position' | 'arr' | 'appearance'>,
    Omit<UseSelect, 'selectRef'> {}

export const SelectList = ({
  editable,
  onClickSelectItem,
  showItems,
  show,
  value,
  position,
  arr,
  appearance,
}: SelectListProps) => (
  <ul
    className={cx(
      styles.list,
      show && styles.show,
      position && styles[position],
      styles[appearance]
    )}
  >
    {arr.map((c) => (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <li
        key={c}
        onClick={editable ? () => onClickSelectItem(c) : showItems}
        className={cx(styles.item, value === c && editable && styles.active)}
      >
        {c}
      </li>
    ))}
  </ul>
);
