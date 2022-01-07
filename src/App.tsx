import React, { createContext, useState } from 'react';
import { ContainerMain } from 'components/UI/ContainerMain';
import { ExpenseFormWrapper } from 'components/form/ExpenseFormWrapper';
import { ExpensesWrapper } from 'components/items/ExpensesWrapper';
import type { Item } from 'types';
import { setToLocalStorage, getFromLocalStorage } from 'utils/localStorage';

const initialExpenses: Item[] = getFromLocalStorage() === null ? [] : JSON.parse(getFromLocalStorage() as string);

interface ExpenseContextProps {
  expenses: Item[] | null;
  onAddExpense(arg: Item): void;
  onDeleteExpense(id: number): void;
}

export const ExpenseContext = createContext<Partial<ExpenseContextProps>>({});

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
    <ExpenseContext.Provider value={{
      expenses,
      onAddExpense: addExpenseHandler,
      onDeleteExpense: deleteExpenseHandler,
    }}>
      <ContainerMain>
        <ExpenseFormWrapper />
        <ExpensesWrapper />
      </ContainerMain>
    </ExpenseContext.Provider>
  );
};

export default App;
