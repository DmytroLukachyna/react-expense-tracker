import type { Item } from 'types/types';

export const setToLocalStorage = (item: Item[]): void => localStorage.setItem('list', JSON.stringify(item));

export const getFromLocalStorage = (): string | null => localStorage.getItem('list');
