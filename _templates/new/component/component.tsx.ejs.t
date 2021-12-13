---
to: <%= absPath %>/<%= component_name %>.tsx
---
import React from 'react';
import classNames from 'classnames';
import style from './<%= component_name %>.module.scss';

export interface <%= component_name %>Props {
  className?: string;
}

const <%= component_name %>: React.FC<<%= component_name %>Props> = ({ className }) => (
  <div className={classNames(style.component, className)} />
);

export default <%= component_name %>;
