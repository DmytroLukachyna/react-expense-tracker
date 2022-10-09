import React from 'react';
import classNames from 'classnames';
import * as cssTypes from 'types/cssTypes';
import style from './Container.module.scss';

export interface ContainerProps {
  display?: cssTypes.Display;
  position?: cssTypes.Position;
  flexgrow?: cssTypes.FlexGrow;
  flexshrink?: cssTypes.FlexShrink;
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  display,
  position,
  flexgrow,
  flexshrink,
  className,
  children,
}) => (
  <div
    className={classNames(
      style.container,
      {
        [style[`display_${display}`]]: display,
        [style[`position_${position}`]]: position,
        [style[`flex-grow_${flexgrow}`]]: flexgrow,
        [style[`flex-shrink_${flexshrink}`]]: flexshrink,
      },
      className,
    )}
  >
    {children}
  </div>
);

export default Container;
