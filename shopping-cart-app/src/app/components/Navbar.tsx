"use client"
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar=()=>{
    return <div className="flex justify-around items-center">
        <Link href="/">
            <Image src="/image_logo.png" alt="logo" width={150} height={100} />
        </Link>
        <nav>
            <ul className="flex font-bold">
                <li className="mr-3">
                    <Link href="/">Home</Link>
                </li>
                <li className="mr-3">
                    <Link href="/">Women's</Link>
                </li>
                <li className="mr-3">
                    <Link href="/">Men's</Link>
                </li>
                <li className="mr-3">
                    <Link href="/">Shop</Link>
                </li>
                <li className="mr-3">
                    <Link href="/">Contact</Link>
                </li>
            </ul>
        </nav>
        <Link href="/cart">
            <CartIcon />
        </Link>
    </div>
}

export default Navbar;