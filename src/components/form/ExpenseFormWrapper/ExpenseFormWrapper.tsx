import React, { useState } from 'react';
import { ExpenseForm } from 'components/form/ExpenseForm';
import { Button } from 'components/UI/Button';
import type { Item } from 'types/types';
import style from './ExpenseFormWrapper.module.scss';

export interface ExpenseFormWrapperProps {
  dataSubmitHandler(data: Item): void;
}

const ExpenseFormWrapper: React.FC<ExpenseFormWrapperProps> = ({ dataSubmitHandler }) => {
  const [isEditing, setIsEditing] = useState(false);

  const submittedDataHandler = (expenseData: Item) => {
    dataSubmitHandler(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={style.expense}>
      {!isEditing && (
        <Button onClick={startEditingHandler}>Add New Expense</Button>
      )}
      {isEditing && (
        <ExpenseForm
          submitData={submittedDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default ExpenseFormWrapper;
