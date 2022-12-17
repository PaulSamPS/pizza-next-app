import React from 'react';
import { Button, Card, Badge } from '@components/Blocks';
import Image from 'next/image';
import { Paragraph, Title } from '@components/Typography';
import { ModalProductCustomization } from '@entities';
import desktop from './styles/desktop.module.scss';
import pizza from './pizza.jpg';

export const ProductCardDesktop = () => {
  const [modal, setModal] = React.useState<boolean>(false);

  return (
    <Card className={desktop['product-card']}>
      <Badge>New</Badge>
      <Image src={pizza} alt='pizza' width={300} height={300} />
      <div className={desktop.body}>
        <Title level='3' weight='w1' className={desktop.name}>
          Пепперони по-деревенски
        </Title>
        <Paragraph className={desktop.text}>
          Огурцы маринованные, Пепперони, Сыр Моцарелла...
        </Paragraph>
        <div className={desktop.bottom}>
          <Button
            appearance='primary'
            height={48}
            width={130}
            onClick={() => setModal(true)}
          >
            Выбрать
          </Button>
          <Title level='5' className={desktop.price}>
            от 399 ₽
          </Title>
        </div>
      </div>
      <ModalProductCustomization setModal={setModal} modal={modal} />
    </Card>
  );
};
