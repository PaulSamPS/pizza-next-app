import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps extends React.AllHTMLAttributes<HTMLDivElement> {}

const Portal = ({ children }: PortalProps) => {
  const [container] = useState<HTMLDivElement>(() =>
    document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, []);

  return ReactDOM.createPortal(children, container);
};

export default Portal;
