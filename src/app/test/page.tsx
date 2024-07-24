'use client';

import { useTransition } from 'react';

export default function Test() {
  const [isTransition, startTransition] = useTransition();
  const handleClick = () => {
    startTransition(async () => {
      const a = new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
      await a;
      console.log('done');
      throw new Error('error');
    });
  };
  return (
    <button onClick={handleClick}>{isTransition ? 'loading' : 'click'}</button>
  );
}
