import React from 'react';
import { ExpenseItem } from 'components/items/ExpenseItem';
import type { Item } from 'types/types';
import style from './ExpenseList.module.scss';

export interface ExpenseListProps {
  items: Item[];
  onDeleteExpenseHandler(id: number): void;
}

const ExpenseList: React.FC<ExpenseListProps> = ({ items, onDeleteExpenseHandler }) => {
  if (items.length === 0) {
    return <h2 className={style.fallback}>Found no expenses.</h2>;
  }

  return (
    <ul className={style.list}>
      {items.map((expense: Item) => (
        <ExpenseItem
          key={expense.id}
          item={expense}
          deleteItem={onDeleteExpenseHandler}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
