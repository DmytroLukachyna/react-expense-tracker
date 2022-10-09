import type { Item } from 'types';

export const setToLocalStorage = (item: Item[]): void =>
  localStorage.setItem('list', JSON.stringify(item));

export const getFromLocalStorage = (): string | null => localStorage.getItem('list');
