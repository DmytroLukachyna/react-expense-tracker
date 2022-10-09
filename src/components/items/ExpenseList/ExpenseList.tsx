import React, { useContext } from 'react';
import { ExpenseItem } from 'components/items/ExpenseItem';
import type { Item } from 'types';
import style from './ExpenseList.module.scss';
import { ExpenseContext } from 'App';

export interface ExpenseListProps {
  items: Item[];
}

const ExpenseList: React.FC<ExpenseListProps> = ({ items }) => {
  if (items.length === 0) {
    return <h2 className={style.fallback}>Found no expenses.</h2>;
  }

  const { onDeleteExpense } = useContext(ExpenseContext);

  return (
    <ul className={style.list}>
      {items.map((expense: Item) => (
        <ExpenseItem key={expense.id} item={expense} deleteItem={onDeleteExpense!} />
      ))}
    </ul>
  );
};

export default ExpenseList;
