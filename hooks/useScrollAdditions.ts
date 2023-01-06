import React from 'react';
import debounce from 'lodash.debounce';

type UseScrollAdditions = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollContainerBy: (distance: number) => void;
  containerRef: React.RefObject<HTMLDivElement>;
};

export const useScrollAdditions = (): UseScrollAdditions => {
  const [canScrollLeft, setCanScrollLeft] = React.useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = React.useState<boolean>(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const checkForScrollPosition = () => {
    const { current } = containerRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const debounceCheckForScrollPosition = debounce(checkForScrollPosition, 300);

  const scrollContainerBy = (distance: number) =>
    containerRef.current?.scrollBy({ left: distance, behavior: 'smooth' });

  React.useEffect(() => {
    const { current } = containerRef;
    checkForScrollPosition();
    current?.addEventListener('scroll', debounceCheckForScrollPosition);

    return () => {
      current?.removeEventListener('scroll', debounceCheckForScrollPosition);
      debounceCheckForScrollPosition.cancel();
    };
  }, [debounceCheckForScrollPosition]);

  return { canScrollLeft, canScrollRight, scrollContainerBy, containerRef };
};
