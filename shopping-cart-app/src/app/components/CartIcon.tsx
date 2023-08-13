'use client';
import React from 'react';
import { ShoppingCartIcon } from 'lucide-react';
import { totalQuantitySelector } from '../redux/Slice/cartSlice';
import { useAppSelector, useAppDispatch } from '../redux/store';
import { toggleCart } from '../redux/Slice/cartSlice';
const CartIcon = () => {
  const totalQuantity = useAppSelector(totalQuantitySelector);
  const dispatch = useAppDispatch();
  return (
    <div>
      <ShoppingCartIcon
        onClick={() => dispatch(toggleCart())}
        className="w-8 h-8 text-slate-600 absolute hover:cursor-pointer"
      />
      <div className="bg-red-500 flex justify-center items-center rounded-full w-6 relative left-6 bottom-3 text-white">
        {totalQuantity}
      </div>
    </div>
  );
};

export default CartIcon;
