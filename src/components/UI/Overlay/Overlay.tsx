import React from 'react';
import classNames from 'classnames';
import style from './Overlay.module.scss';

export interface OverlayProps {
  className?: string;
  onClick?(): void;
}

const Overlay: React.FC<OverlayProps> = ({ className, onClick, children }) => (
  <div
    className={classNames(style.overlay, className)}
    role='presentation'
    onClick={onClick}
  >
    {children}
  </div>
);

export default Overlay;
