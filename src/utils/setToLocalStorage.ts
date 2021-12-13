import type { Item } from 'types/types';

const setToLocalStorage = (item: Item[]) => {
  localStorage.setItem('list', JSON.stringify(item));
};

export default setToLocalStorage;