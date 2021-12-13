import React from 'react';
import classNames from 'classnames';
import { Button } from 'components/UI/Button';
import style from './ErrorModal.module.scss';

export interface ErrorModalProps {
  title: string;
  message: string;
  className?: string;
  onConfirm(): void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ title, message, className, onConfirm }) => (
  <div className={classNames(style.modal, className)}>
    <header className={style.header}>
      <h2 className={style.title}>{title}</h2>
    </header>
    <div className={style.content}>
      <p>{message}</p>
    </div>
    <footer className={style.actions}>
      <Button onClick={onConfirm}>Okay</Button>
    </footer>
  </div>
);

export default ErrorModal;
