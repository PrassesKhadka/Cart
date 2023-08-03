'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import CartCard from '../components/CartCard';
import { totalPrice } from '../redux/Slice/cartSlice';
import { clearAll } from '../redux/Slice/cartSlice';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(totalPrice);
  const cart = useAppSelector((state) => state.cart.cartItem);
  console.log(cart);
  return (
    <div className="rounded-sm shadow-xl p-3 ">
      {cart.map((element) => (
        <CartCard element={element} />
      ))}
      <div className="relative bottom-0 text-2xl font-bold mt-4 ">
        Total Price:{`  ${total} $`}
      </div>
      <button
        className="relative bottom-0 bg-red-500 text-white rounded-sm p-1"
        onClick={() => dispatch(clearAll())}
      >
        Clear all
      </button>
    </div>
  );
};

export default CartPage;
