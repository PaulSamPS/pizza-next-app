import React from 'react';
import { Button, TabsGrid, Text } from '@components';
import { TabProps } from './Tab.props';

export const Tab = ({ col = '2', arr }: TabProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0);

  return (
    <TabsGrid column={col}>
      {arr.map((s, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <Button
          appearance='tab'
          tabIndex={0}
          key={index}
          tabActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        >
          <Text level='3'>{s}</Text>
        </Button>
      ))}
    </TabsGrid>
  );
};
