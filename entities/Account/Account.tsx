import React from 'react';
import { Card } from '@shared/ui';
import { View } from './ui/View/View';
import styles from './Account.module.scss';
import { EditInfo } from './ui/EditInfo/EditInfo';

export const Account = () => {
  const [edit, setEdit] = React.useState<boolean>(false);

  return (
    <Card className={styles['user-info']}>
      {edit ? <EditInfo edit={setEdit} /> : <View edit={setEdit} />}
    </Card>
  );
};
