'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { toggleCart, totalPrice } from '../redux/Slice/cartSlice';
import CartCard from './CartCard';
import { clearAll } from '../redux/Slice/cartSlice';
import { XOctagonIcon } from 'lucide-react';
import Link from 'next/link';

const CartSlider = () => {
  const toggle = useAppSelector((state) => state.cart.cartVisible);
  const dispatch = useAppDispatch();
  const total = useAppSelector(totalPrice);
  const cart = useAppSelector((state) => state.cart.cartItem);

  return (
    <div className="relative z-20 w-full ">
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            className=""
          >
            <div className="fixed right-0 top:0 p-3 bg-slate-700 text-white h-full max-w-[520px] min-w-[320px]  overflow-scroll">
              <XOctagonIcon
                className="fixed right-0 mr-4 font-bold text-6xl mt-4 hover:cursor-pointer "
                onClick={() => dispatch(toggleCart())}
              />
              <div className="flex justify-center items-center text-2xl font-bold">
                Your Cart
              </div>
              {total ? (
                cart.map((element) => <CartCard element={element} />)
              ) : (
                <div className="text-3xl font-semibold pb-60 flex justify-center items-center text-center min-h-[65vh] mt-[30px] shadom-md ">
                  <p>No Items to show in the cart</p>
                </div>
              )}
              <hr></hr>
              <div className="relative flex flex-col bottom-0 text-2xl font-bold mt-4 ">
                <span>Total Price:{`  ${total} $`}</span>
                <button
                  className="bottom-0 bg-red-500 h-full  text-white rounded-sm p-1"
                  onClick={() => dispatch(clearAll())}
                >
                  Clear all
                </button>
                <br></br>
                <Link href="/pages/cart">
                  <button
                    className="bg-green-500 p-3 mt-3 rounder-md text-white w-full"
                    onClick={() => dispatch(toggleCart())}
                  >
                    Check Out
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartSlider;
