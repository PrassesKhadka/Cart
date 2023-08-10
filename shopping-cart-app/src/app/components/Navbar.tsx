'use client';
import React from 'react';
import Link from 'next/link';
import CartIcon from './CartIcon';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="flex justify-around items-center shadow-xl mb-2 sticky top-0 bg-slate-50">
      <Link href="/">
        <Image src="/image_logo.png" alt="logo" width={150} height={100} />
      </Link>
      <nav>
        <ul className="flex font-bold">
          <li className="mr-3">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-3">
            <Link href="/pages/category/electronics">Electronics</Link>
          </li>
          <li className="mr-3">
            <Link href="/pages/category/jewelery">Jewelery</Link>
          </li>
          <li className="mr-3">
            <Link href="/pages/category/men's clothing">Men's Clothing</Link>
          </li>
          <li className="mr-3">
            <Link href="/pages/category/women's clothing">
              Womens's Clothing
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/pages/cart">
        <CartIcon />
      </Link>
    </div>
  );
};

export default Navbar;
