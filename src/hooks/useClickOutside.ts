import { useEffect } from 'react';

export interface ClickOutsideProps {
  ref: HTMLDivElement | null,
  callback(arg: boolean): void;
}

export default function useClickOutside({ ref, callback }: ClickOutsideProps): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref && !ref?.contains(event.target as Node)) {
        callback(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}
