import React from 'react';
import { TypeAttributes } from '@shared/types';
import cx from 'clsx';
import { useSelect } from '@shared/ui/Form/Select/hooks/useSelect';
import styles from './styles/Select.module.scss';
import { SelectList } from './SelectList';
import { SelectValue } from './SelectValue';

export interface SelectProps extends React.AllHTMLAttributes<HTMLElement> {
  arr: string[];
  before?: React.ReactNode;
  position?: 'center' | 'left';
  editable?: boolean;
  placeholder?: string;
  level?: TypeAttributes.Level;
  appearance: 'border' | 'basic';
}

export const Select = ({
  appearance = 'basic',
  arr,
  before,
  placeholder,
  editable = false,
  position = 'left',
  level = 'l2',
}: SelectProps) => {
  const { show, value, onClickSelectItem, selectRef, showItems } = useSelect(
    arr,
    placeholder
  );

  return (
    <div
      className={cx(styles.select, styles[appearance])}
      ref={selectRef}
      role='menu'
      tabIndex={0}
    >
      <SelectValue
        appearance={appearance}
        show={show}
        before={before}
        showItems={showItems}
        value={value}
        level={level}
      />
      <SelectList
        appearance={appearance}
        arr={arr}
        editable={editable}
        value={value}
        position={position}
        show={show}
        onClickSelectItem={onClickSelectItem}
        showItems={showItems}
        level={level}
      />
    </div>
  );
};
