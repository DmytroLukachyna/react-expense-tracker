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
}

const Container: React.FC<ContainerProps> = ({
  display,
  position,
  flexgrow,
  flexshrink,
  className,
  children,
}) => (
  <div className={classNames(
    style.container,
    {
      [style[`display_${display}`]]: display,
      [style[`position_${position}`]]: position,
      // [style.transition]: transition,
      // [style.radius]: radius,
      // [style.fullscreen]: fullscreen,
      [style[`flex-grow_${flexgrow}`]]: flexgrow,
      [style[`flex-shrink_${flexshrink}`]]: flexshrink,
      // [style[`flex-direction_${flexdirection}`]]: isFlex && flexdirection,
      // [style[`justify-content_${justifycontent}`]]: isFlex && justifycontent,
      // [style[`align-items_${alignitems}`]]: isFlex && alignitems,
      // [style[`align-content_${aligncontent}`]]: isFlex && aligncontent,
      // [style[`align-self_${alignself}`]]: isFlex && alignself,
      // [style[`flex-wrap_${flexwrap}`]]: isFlex && flexwrap,
      // [style[`flex-grow_${flexgrow}`]]: flexgrow,
      // [style[`overflow_${overflow}`]]: overflow && isFlex,
    },
    className,
  )}>
    {children}
  </div>
);

export default Container;
