import React from 'react';
import { ReactComponent as DeleteIcon } from 'assets/svg/delete.svg';
import style from './DeleteButton.module.scss';

export interface DeleteButtonProps {
  onClick(): void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => (
  <button className={style.button} onClick={onClick}><DeleteIcon /></button>
);

export default DeleteButton;
