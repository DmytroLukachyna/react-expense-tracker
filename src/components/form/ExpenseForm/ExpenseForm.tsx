import React, { useState } from 'react';
import { Button } from 'components/UI/Button';
import { Portal } from 'components/Helpers/Portal';
import type { Item, InputType, FormType } from 'types/types';
import style from './ExpenseForm.module.scss';
import { Overlay } from 'components/UI/Overlay';
import { ErrorModal } from 'components/UI/ErrorModal';

export interface ExpenseFormProps {
  submitData(data: Item): void;
  onCancel(): void;
}

export interface ErrorProps {
  title: string;
  message: string;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ submitData, onCancel }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [error, setError] = useState<ErrorProps | null>();

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
      submitData(expenseData);
      setEnteredTitle('');
      setEnteredPrice('');
      setEnteredDate('');
    } else {
      const fields = {
        'Title': enteredTitle,
        'Price': enteredPrice,
        'Date': enteredDate,
      };
      const emptyFields = Object.keys(Object.fromEntries(Object.entries(fields).filter(([, value]) => value.length === 0))).join(', ');
      console.log(`Empty fields: ${emptyFields}`);
      setError({
        title: 'Something went wrong...',
        message: `Empty fields: ${emptyFields}`,
      });
    }
  };

  return (
    <>
      {error &&
      <Portal>
        <Overlay>
          <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}  />
        </Overlay>
      </Portal>
      }
      <form onSubmit={submitHandler}>
        <div className={style.inputs}>
          <div>
            <label className={style.title}>Title</label>
            <input
              className={style.input}
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div>
            <label className={style.title}>Price</label>
            <input
              className={style.input}
              type='number'
              min='0.01'
              step='0.01'
              value={enteredPrice}
              onChange={priceChangeHandler}
            />
          </div>
          <div>
            <label className={style.title}>Date</label>
            <input
              className={style.input}
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className={style.buttons}>
          <Button type="button" onClick={onCancel}>Cancel</Button>
          <Button type='submit'>Add Expense</Button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
