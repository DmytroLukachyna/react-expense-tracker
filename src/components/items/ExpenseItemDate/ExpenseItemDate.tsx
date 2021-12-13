import React from 'react';
import style from './ExpenseItemDate.module.scss';

export interface ExpenseItemDateProps {
  date: number;
}

const ExpenseItemDate: React.FC<ExpenseItemDateProps> = ({ date }) => {
  const fullDate = new Date(date);
  const day = fullDate.toLocaleString('en-US', { day: '2-digit' });
  const month = fullDate.toLocaleString('en-US', { month: 'long' });
  const year = fullDate.getFullYear();

  return (
    <div className={style.date}>
      <div className={style.month}>{month}</div>
      <div className={style.year}>{year}</div>
      <div className={style.day}>{day}</div>
    </div>
  );
};

export default ExpenseItemDate;
