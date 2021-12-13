import React from 'react';
import classNames from 'classnames';
import style from './Container.module.scss';

export interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => (
  <div className={classNames(style.container, className)}>
    {children}
  </div>
);

export default Container;
