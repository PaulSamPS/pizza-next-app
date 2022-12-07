import React from 'react';
import styles from './styles/Select.module.scss';
import { SelectProps } from './types/Select.props';
import { useSelect } from './hooks/useSelect';
import { SelectList } from './SelectList';
import { SelectValue } from './SelectValue';

export const Select = ({
  arr,
  before,
  placeholder,
  editable = false,
  position = 'basic',
  level = 'l2',
}: SelectProps) => {
  const { show, location, onClickSelectItem, selectRef, showItems } =
    useSelect(arr);

  return (
    <div className={styles.select} ref={selectRef}>
      <SelectValue
        placeholder={placeholder}
        show={show}
        before={before}
        showItems={showItems}
        location={location}
        level={level}
      />
      <SelectList
        arr={arr}
        editable={editable}
        location={location}
        position={position}
        show={show}
        onClickSelectItem={onClickSelectItem}
        showItems={showItems}
      />
    </div>
  );
};
