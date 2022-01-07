import React, { useContext, useState } from 'react';
import { ExpenseList } from 'components/items/ExpenseList';
import { ExpensesFilter } from 'components/items/ExpensesFilter';
import { ExpenseChart } from 'components/chart/ExpenseChart';
import { ExpenseContext } from 'App';
import style from './ExpensesWrapper.module.scss';

const ExpensesWrapper: React.FC = () => {
  const [filteredYear, setFilteredYear] = useState('2022');
  
  const { expenses } = useContext(ExpenseContext);

  const filterChangeHandler = (selectedYear: string) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses!.filter((expense) => {
    if (filteredYear === 'All') {
      return true;
    }
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });

  return (
    <div className={style.expenses}>
      <ExpensesFilter
        selectedYear={filteredYear}
        onChange={filterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} selectedYear={filteredYear} />
      <ExpenseList items={filteredExpenses} />
    </div>
  );
};

export default ExpensesWrapper;
