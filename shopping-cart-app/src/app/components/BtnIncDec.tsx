'use client';
import React from 'react';
import { TrashIcon } from 'lucide-react';
import { PlusCircleIcon } from 'lucide-react';
import { MinusCircleIcon } from 'lucide-react';

interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}

const BtnIncDec = (props: Props) => {
  return (
    <div className="flex justify-between items-center bg-blue-200 p-1 rounded-sm">
      <button className="p-1" onClick={props.onDecrease}>
        {props.qty === 1 ? (
          <TrashIcon className="w-4 h-6 text-red-600" />
        ) : (
          <MinusCircleIcon />
        )}
      </button>
      <p className="p-1 text-xl font-semibold">{props.qty}</p>
      <button onClick={props.onIncrease}>
        <PlusCircleIcon />
      </button>
    </div>
  );
};

export default BtnIncDec;
