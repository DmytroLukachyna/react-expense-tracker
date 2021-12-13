import React, { useState } from 'react';
import { ExpenseList } from 'components/items/ExpenseList';
import { ExpensesFilter } from 'components/items/ExpensesFilter';
import { ExpenseChart } from 'components/chart/ExpenseChart';
import { Container } from 'components/UI/Container';
import type { Item } from 'types/types';
import style from './ExpensesWrapper.module.scss';

export interface ExpensesWrapperProps {
  items: Item[];
  onDeleteExpense(id: number): void;
}

const ExpensesWrapper: React.FC<ExpensesWrapperProps> = ({ items, onDeleteExpense }) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    if (filteredYear === 'All') {
      return true;
    }
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <Container className={style.expenses}>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} selectedYear={filteredYear} />
      <ExpenseList items={filteredExpenses} onDeleteExpenseHandler={onDeleteExpense} />
    </Container>
  );
};

export default ExpensesWrapper;
