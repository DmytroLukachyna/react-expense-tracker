export interface Data {
  title: string;
  date: number;
  price: number;
}

export interface Item extends Data {
  id: number;
}

export interface ChartItem {
  label: string;
  value: number;
}

export type InputType = React.ChangeEvent<HTMLInputElement>;
export type SelectType = React.ChangeEvent<HTMLSelectElement>;
export type FormType = React.FormEvent<HTMLFormElement>;
