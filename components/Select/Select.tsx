import React from 'react';
import { ArrowDownIcon } from '@helpers/icons/12';
import { Text } from '@components';
import cx from 'clsx';
import styles from './styles/Select.module.scss';
import { SelectProps } from './Select.props';
import { useSelect } from './useSelect';
import { SelectList } from './SelectList';

export const Select = ({
  arr,
  before,
  placeholder,
  editable = false,
  position = 'basic',
}: SelectProps) => {
  const { show, location, onClickSelectItem, selectRef, showItems } =
    useSelect(arr);

  return (
    <div className={styles.select} ref={selectRef}>
      {/* eslint-disable-next-line max-len */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <div className={styles.current} onClick={showItems} role='listitem'>
        {before && <span className={styles.before}>{before}</span>}
        <Text level='l2'>{placeholder || location}</Text>
        <ArrowDownIcon className={cx(styles.arrow, show && styles.open)} />
      </div>
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
