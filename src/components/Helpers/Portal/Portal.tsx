import React from 'react';
import { createPortal } from 'react-dom';

const Portal: React.FC = ({ children }) => createPortal(children, document.getElementById('modals') as HTMLElement);

export default Portal;







