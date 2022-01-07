import React, { useState } from 'react';
import { ExpenseForm } from 'components/form/ExpenseForm';
import { Button } from 'components/UI/Button';
import style from './ExpenseFormWrapper.module.scss';

const ExpenseFormWrapper: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
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
        <ExpenseForm onCancel={stopEditingHandler} />
      )}
    </div>
  );
};

export default ExpenseFormWrapper;
