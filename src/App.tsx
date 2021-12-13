import React, { useState } from 'react';
import { ExpenseFormWrapper } from 'components/form/ExpenseFormWrapper';
import { ExpensesWrapper } from 'components/items/ExpensesWrapper';
import type { Item } from 'types/types';
import setToLocalStorage from 'utils/setToLocalStorage';

const initialExpenses: Item[] = localStorage.getItem('list') === null ? [] : JSON.parse(localStorage.getItem('list')!);

const App: React.FC = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const addExpenseHandler = (expense: Item) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [expense, ...prevExpenses].sort((a, b) => b.date - a.date);
      setToLocalStorage(updatedExpenses);
      return updatedExpenses;
    });
  };
  const deleteExpenseHandler = (id: number) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter((item) => item.id !== id);
      setToLocalStorage(updatedExpenses);
      return updatedExpenses;
    });
  };
  return (
    <div>
      <ExpenseFormWrapper dataSubmitHandler={addExpenseHandler} />
      <ExpensesWrapper items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </div>
  );
};

export default App;
