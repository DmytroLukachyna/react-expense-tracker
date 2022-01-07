import React from 'react';
import { ExpenseItemDate } from 'components/items/ExpenseItemDate';
import { DeleteButton } from 'components/UI/DeleteButton';
import type { Item } from 'types';
import style from './ExpenseItem.module.scss';

export interface ExpenseItemProps {
  item: Item;
  deleteItem(id: number): void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ item, deleteItem }) => {
  const deleteExpenseHandler = () => {
    deleteItem(item.id);
  };
  return (
    <li>
      <div className={style.item}>
        <ExpenseItemDate date={item.date} />
        <div className={style.description}>
          <h2 className={style.title}>{item.title}</h2>
          <div className={style.price}>${item.price}</div>
        </div>
        <DeleteButton onClick={deleteExpenseHandler}>Delete</DeleteButton>
      </div>
    </li>
  );
};

export default ExpenseItem;
