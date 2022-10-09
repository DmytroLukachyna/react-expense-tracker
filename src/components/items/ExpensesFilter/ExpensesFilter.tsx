import React from 'react';
import type { SelectType } from 'types';
import style from './ExpensesFilter.module.scss';

export interface ExpensesFilterProps {
  selectedYear: string;
  onChange(value: string): void;
}

const ExpensesFilter: React.FC<ExpensesFilterProps> = ({ selectedYear, onChange }) => {
  const onChangeHandler = (event: SelectType) => {
    onChange(event.target.value);
  };

  return (
    <div className={style.filter}>
      <div className={style.control}>
        <label className={style.label}>Filter by year</label>
        <select className={style.select} value={selectedYear} onChange={onChangeHandler}>
          <option value="All">All years</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
