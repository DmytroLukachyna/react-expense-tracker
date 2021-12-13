import React from 'react';
import classNames from 'classnames';
import style from './Button.module.scss';

export interface ButtonProps {
  type?: 'button' |  'submit',
  className?: string,
  onClick?(): void;
}

const Button: React.FC<ButtonProps> = ({ type, className, onClick, children }) => (
  <button className={classNames(style.button, className)} type={type} onClick={onClick}>{children}</button>
);

export default Button;
