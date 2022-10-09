import React, { useContext, useState } from 'react';
import { Button } from 'components/UI/Button';
import { Input } from 'components/UI/Input';
import { Overlay } from 'components/UI/Overlay';
import { ErrorModal } from 'components/UI/ErrorModal';
import { Portal } from 'components/Helpers/Portal';
import type { Item, InputType, FormType } from 'types';
import { ExpenseContext } from 'App';
import style from './ExpenseForm.module.scss';

export interface ExpenseFormProps {
  onCancel(): void;
}

interface ErrorProps {
  title: string;
  message: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [error, setError] = useState<ErrorProps | null>();
  const { onAddExpense } = useContext(ExpenseContext);

  const titleChangeHandler = (event: InputType) => {
    setEnteredTitle(event.target.value);
  };

  const priceChangeHandler = (event: InputType) => {
    setEnteredPrice(event.target.value);
  };

  const dateChangeHandler = (event: InputType) => {
    setEnteredDate(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  const submitHandler = (event: FormType) => {
    event.preventDefault();
    if (enteredTitle && enteredPrice && enteredDate) {
      const expenseData: Item = {
        title: enteredTitle,
        price: +enteredPrice,
        date: +new Date(enteredDate),
        id: Date.now(),
      };
      onAddExpense?.(expenseData);
      setEnteredTitle('');
      setEnteredPrice('');
      setEnteredDate('');
    } else {
      const fields = {
        Title: enteredTitle,
        Price: enteredPrice,
        Date: enteredDate,
      };
      const emptyFields = Object.keys(
        Object.fromEntries(Object.entries(fields).filter(([, value]) => value.length === 0)),
      ).join(', ');
      console.log(`Empty fields: ${emptyFields}`);
      setError({
        title: 'Something went wrong...',
        message: `Empty fields: ${emptyFields}`,
      });
    }
  };

  return (
    <>
      {error && (
        <Portal>
          <Overlay onClick={errorHandler}>
            <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />
          </Overlay>
        </Portal>
      )}
      <form onSubmit={submitHandler}>
        <div className={style.inputs}>
          <Input title="Title" type="text" value={enteredTitle} onChange={titleChangeHandler} />
          <Input
            title="Price"
            type="number"
            min="0.01"
            step="0.01"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
          <Input
            title="Date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className={style.buttons}>
          <Button type="button" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Add Expense</Button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
