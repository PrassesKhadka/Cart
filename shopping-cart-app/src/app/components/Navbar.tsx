"use client"
import React from "react";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Navbar=()=>{
    return <div className="bg-blue-500 h-105 p-4 flex align-center">
        <Link href="/">Home</Link>
        <Link href="/cart">
            <CartIcon />
        </Link>
    </div>
}

export default Navbar;