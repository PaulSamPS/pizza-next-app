type RadioItemsArray = {
  id: string;
  value: string;
};

export type RadioItemsProps = {
  items: RadioItemsArray[];
  onChange: (value: string) => void;
  value: string;
  title: string;
  id: string;
};
