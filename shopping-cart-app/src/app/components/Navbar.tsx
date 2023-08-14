'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="bg-white">
      <AnimatePresence>
        <div className="flex justify-around items-center shadow-xl mb-2 sticky top-0 bg-slate-50">
          <Menu
            className="cursor-pointer block sm:hidden lg:hidden xl:hidden animate-bounce"
            onClick={() => {
              setVisible(!visible);
            }}
          />
          <Link href="/">
            <Image src="/amazon.png" alt="logo" width={150} height={100} />
          </Link>
          <nav className="hidden lg:block md:block">
            <ul className="flex font-bold">
              <li className="mr-3">
                <Link href="/pages/products">Home</Link>
              </li>
              <li className="mr-3">
                <Link href="/pages/category/electronics">Electronics</Link>
              </li>
              <li className="mr-3">
                <Link href="/pages/category/jewelery">Jewelery</Link>
              </li>
              <li className="mr-3">
                <Link href="/pages/category/men's clothing">Men</Link>
              </li>
              <li className="mr-3">
                <Link href="/pages/category/women's clothing">Women</Link>
              </li>
            </ul>
          </nav>
          <CartIcon />
        </div>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-slate-100 transparent min-h-[100px] min-w-full flex flex-col justify-start items-center text-xl font-extralight pt-2 "
          >
            <Link className="pb-3" href="/pages/products">
              Home
            </Link>
            <Link className="pb-3" href="/pages/category/electronics">
              Electronics
            </Link>
            <Link className="pb-3" href="/pages/category/jewelery">
              Jewelery
            </Link>
            <Link className="pb-3" href="/pages/category/men's clothing">
              Men's clothing
            </Link>
            <Link className="pb-3" href="/pages/category/women's clothing">
              Women's clothing
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
