import React from 'react';
import { ChartBar } from 'components/chart/ChartBar';
import type { ChartItem } from 'types';
import style from './ChartBox.module.scss';

export interface ChartBoxProps {
  data: ChartItem[];
}

const ChartBox: React.FC<ChartBoxProps> = ({ data }) => {
  const values = data.map(item => item.value);
  const total = [...values].reduce((a, b) => a + b);

  return (
    <div className={style.box}>
      {data.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          total={total}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default ChartBox;
