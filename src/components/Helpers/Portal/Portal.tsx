import React from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => {
  // const modalElement: HTMLDivElement = document.createElement('div');

  // useEffect(() => {
  //   modalRoot.appendChild(modalElement);
  //   return () => {
  //     modalRoot.removeChild(modalElement);
  //   };
  // });

  return createPortal(children, document.getElementById('modals') as HTMLElement);
};

export default Portal;







