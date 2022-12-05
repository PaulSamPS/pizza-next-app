import * as React from 'react';
import { Card, Text } from '@components';
import { ArrowDownSmallIcon } from '@helpers/icons/16';
import styles from './SplitButton.module.scss';

const items = ['настройки', 'профиль'];

export const SplitButton = React.memo(() => {
  const [show, setShow] = React.useState<boolean>(false);
  return (
    <Card Component='a' tabIndex={0} style={{ position: 'relative' }}>
      <Text icon={<ArrowDownSmallIcon />} onClick={() => setShow(!show)}>
        Другое
      </Text>
      {show && (
        <div className={styles.list}>
          <ul>
            {items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      )}
    </Card>
  );
});
