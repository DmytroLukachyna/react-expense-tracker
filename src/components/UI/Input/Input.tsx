import React from 'react';
import classNames from 'classnames';
import type { InputType } from 'types';
import style from './Input.module.scss';

export interface InputProps {
  type: 'text' | 'number' | 'date';
  title: string;
  value: string;
  min?: string;
  max?: string;
  step?: string;
  className?: string;
  onChange(event: InputType): void;
}

const Input: React.FC<InputProps> = ({
  type,
  title,
  value,
  min,
  max,
  step,
  className,
  onChange,
}) => {
  const id = title.toLowerCase();
  return (
    <div className={classNames(style.component, className)}>
      <label htmlFor={id} className={style.title}>
        {title}
      </label>
      <input
        id={id}
        className={style.input}
        type={type}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
