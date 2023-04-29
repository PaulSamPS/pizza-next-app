import React from 'react';
import { Card, Title } from '@shared/ui';
import { View } from './ui';
import styles from './Account.module.scss';
import { EditInfo } from './ui/EditInfo/EditInfo';

export const Account = () => {
  const [edit, setEdit] = React.useState<boolean>(false);

  return (
    <>
      <Title level='2' className={styles.title}>
        Настройки
      </Title>
      <Card className={styles['user-info']}>
        {edit ? <EditInfo edit={setEdit} /> : <View edit={setEdit} />}
      </Card>
    </>
  );
};
