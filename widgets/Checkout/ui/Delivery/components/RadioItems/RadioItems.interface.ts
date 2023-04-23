type RadioItemsArray = {
  id: string;
  value: string;
};

export type RadioItemsProps = {
  items: RadioItemsArray[];
  onChange: (e: string) => void;
  value: string;
  title: string;
  id: string;
};
