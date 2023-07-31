"use client"
import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { totalQuantitySelector } from "../redux/Slice/cartSlice";
import { useAppSelector } from "../redux/store";


const CartIcon=()=>{
    const totalQuantity=useAppSelector(totalQuantitySelector)
    return <div>
        <ShoppingCartIcon className="w-8 h-8 text-slate-600 absolute"/>
        <div className="bg-red-500 flex justify-center items-center rounded-full w-6 relative left-6 bottom-3 text-white">{totalQuantity}</div>
    </div>
}

export default CartIcon;