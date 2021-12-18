import React, { useState } from 'react';
import { ContainerMain } from 'components/UI/ContainerMain';
import { ExpenseFormWrapper } from 'components/form/ExpenseFormWrapper';
import { ExpensesWrapper } from 'components/items/ExpensesWrapper';
import type { Item } from 'types/types';
import { setToLocalStorage, getFromLocalStorage } from 'utils/localStorage';

const initialExpenses: Item[] = getFromLocalStorage() === null ? [] : JSON.parse(getFromLocalStorage() as string);

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
    <ContainerMain>
      <ExpenseFormWrapper dataSubmitHandler={addExpenseHandler} />
      <ExpensesWrapper items={expenses} onDeleteExpense={deleteExpenseHandler} />
    </ContainerMain>
  );
};

export default App;
