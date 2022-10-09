import React from 'react';
import { ChartBox } from 'components/chart/ChartBox';
import type { Item } from 'types';

export interface ExpenseChartProps {
  expenses: Item[];
  selectedYear: string;
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ expenses, selectedYear }) => {
  const months = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  const years = [
    { label: '2019', value: 0 },
    { label: '2020', value: 0 },
    { label: '2021', value: 0 },
    { label: '2022', value: 0 },
  ];

  for (const expense of expenses) {
    if (selectedYear === 'All') {
      const expenseYear = new Date(expense.date).getFullYear().toString();
      const yearsArray = years.map((year) => year.label);
      const position = yearsArray.indexOf(expenseYear);
      years[position].value += expense.price;
    } else {
      const expenseMonth = new Date(expense.date).getMonth();
      months[expenseMonth].value += expense.price;
    }
  }

  return <ChartBox data={selectedYear === 'All' ? years : months} />;
};

export default ExpenseChart;
