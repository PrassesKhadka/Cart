'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { toggleCart, totalPrice } from '../redux/Slice/cartSlice';
import CartCard from './CartCard';
import { clearAll } from '../redux/Slice/cartSlice';
import { X } from 'lucide-react';
import Link from 'next/link';

const CartSlider = () => {
  const toggle = useAppSelector((state) => state.cart.cartVisible);
  const dispatch = useAppDispatch();
  const total = useAppSelector(totalPrice);
  const cart = useAppSelector((state) => state.cart.cartItem);

  return (
    <div className="relative z-20 min-h-full h-full overscroll-none">
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className="absolute w-full "
          >
            <div className="rounded-sm shadow-xl p-3 bg-white overscroll-none min-h-full sm:w-full md:w-[-25%]">
              <X
                className="h-10 w-5 m-6 font-bold hover:cursor-pointer"
                onClick={() => dispatch(toggleCart())}
              />
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
                className="bottom-0 bg-red-500 h-full  text-white rounded-sm p-1"
                onClick={() => dispatch(clearAll())}
              >
                Clear all
              </button>
              <br></br>
              <Link href="/pages/cart">
                <button
                  className="bg-green-500 p-3 mt-3 rounder-md text-white"
                  onClick={() => dispatch(toggleCart())}
                >
                  Check Out
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartSlider;
