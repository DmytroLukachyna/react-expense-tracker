import React from 'react';
import style from './ChartBar.module.scss';

export interface ChartBarProps {
  value: number;
  total: number;
  label: string;
}

const ChartBar: React.FC<ChartBarProps> = ({ value, total, label }) => {
  let barFillHeight = '0%';

  if (total > 0) {
    barFillHeight = Math.round((value / total) * 100) + '%';
  }

  return (
    <div className={style.bar}>
      <div className={style.inner}>
        <div
          className={style.fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={style.label}>{label}</div>
    </div>
  );
};

export default ChartBar;
