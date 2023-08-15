'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import CartCard from '@/app/components/CartCard';
import { totalPrice } from '@/app/redux/Slice/cartSlice';
import { clearAll } from '@/app/redux/Slice/cartSlice';
import { Button } from '@/app/components/ui/ui/button';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const total = useAppSelector(totalPrice);
  const cart = useAppSelector((state) => state.cart.cartItem);
  console.log(cart);
  return (
    <div className="flex flex-col xl:flex-row">
      <div className=" p-3 min-h-full w-full max-h-screen overflow-scroll">
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
        <div className="flex flex-col ">
          <Button
            className="relative bottom-0 bg-red-500 hover:bg-red-600 h-full  text-white  p-1 mb-3"
            onClick={() => dispatch(clearAll())}
          >
            Clear all
          </Button>
          <Button
            onClick={() => alert('Daddy Chill...')}
            className="bg-green-400 text-white hover:bg-green-500"
          >
            Buy Now
          </Button>
        </div>
      </div>
      {/* Payment Partners right */}
      <div className="mt-6 w-full h-full flex justify-center items-center flex-col  bg-white xl:min-h-[50%] xl:justify-start">
        <h1 className="text-xl font-thin text-red-700">
          Our Payment Partners:
        </h1>
        <Marquee speed={300} pauseOnHover direction="right">
          <Image
            src="/esewa.png"
            alt="esewa"
            height={200}
            width={200}
            className="mr-12"
          ></Image>
          <Image
            src="/khalti.png"
            alt="khalti"
            height={200}
            width={200}
            className="mr-12"
          ></Image>
          <Image
            src="/connect_ips.png"
            alt="connect-ips"
            height={200}
            width={200}
            className="mr-12"
          ></Image>
        </Marquee>
      </div>
    </div>
  );
};

export default CartPage;
