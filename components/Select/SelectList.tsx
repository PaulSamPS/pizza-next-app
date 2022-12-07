import React from 'react';
import cx from 'clsx';
import styles from './styles/SelectList.module.scss';
import { UseSelect } from './useSelect';
import { SelectProps } from './Select.props';

interface SelectListProps
  extends Pick<SelectProps, 'editable' | 'position' | 'arr'>,
    Omit<UseSelect, 'selectRef'> {}

export const SelectList = ({
  editable,
  onClickSelectItem,
  showItems,
  show,
  location,
  position,
  arr,
}: SelectListProps) => (
  <ul
    className={cx(
      styles.list,
      show && styles.show,
      position && styles[position]
    )}
  >
    {arr.map((c) => (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
      <li
        key={c}
        onClick={editable ? () => onClickSelectItem(c) : showItems}
        className={cx(styles.item, location === c && editable && styles.active)}
      >
        {c}
      </li>
    ))}
  </ul>
);
