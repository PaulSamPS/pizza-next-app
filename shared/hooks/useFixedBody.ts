import React from 'react';

export const useFixedBody = (modalIsOpened: boolean) => {
  const [scrollModalOpen, setScrollModalOpen] = React.useState<number>(0);
  const [scrollY, setScrollY] = React.useState<number>(0);
  const isBrowser = typeof window !== 'undefined';

  const handleScroll = React.useCallback(() => {
    const currentScrollY = isBrowser ? window.scrollY : 0;
    setScrollY(currentScrollY);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    if (modalIsOpened) {
      document.body.style.position = 'fixed';
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.top = `-${scrollY}px`;
      setScrollModalOpen(scrollY);
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, scrollModalOpen);
    }
  }, [modalIsOpened]);
};
