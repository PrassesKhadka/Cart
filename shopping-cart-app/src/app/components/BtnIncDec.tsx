'use client';
import React from 'react';
import { TrashIcon } from '@heroicons/react/20/solid';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}

const BtnIncDec = (props: Props) => {
  return (
    <div className="flex bg-blue-200 p-1 rounded-sm">
      <button className="p-1" onClick={props.onDecrease}>
        {props.qty === 1 ? <TrashIcon className="w-4 h-6 text-red-600" /> : '-'}
      </button>
      <p className="p-1">{props.qty}</p>
      <button onClick={props.onIncrease}>+</button>
    </div>
  );
};

export default BtnIncDec;
