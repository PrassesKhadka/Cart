'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import CartCard from '@/app/components/CartCard';
import { totalPrice } from '@/app/redux/Slice/cartSlice';
import { clearAll } from '@/app/redux/Slice/cartSlice';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(totalPrice);
  const cart = useAppSelector((state) => state.cart.cartItem);
  console.log(cart);
  return (
    <div className="rounded-sm shadow-xl p-3 min-h-screen">
      {total ? (
        cart.map((element) => <CartCard element={element} />)
      ) : (
        <div className="text-3xl font-semibold pb-60 flex justify-center items-center text-center min-h-[65vh] ">
          <p>No Items to show in the cart</p>
        </div>
      )}
      <hr></hr>
      <div className="relative bottom-0 text-2xl font-bold mt-4 ">
        Total Price:{`  ${total} $`}
      </div>

      <button
        className="relative bottom-0 bg-red-500 h-full  text-white rounded-sm p-1"
        onClick={() => dispatch(clearAll())}
      >
        Clear all
      </button>
    </div>
  );
};

export default CartPage;
