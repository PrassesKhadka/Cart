"use client"
import React from "react";
import { useAppSelector } from "../redux/store";
import CartCard from "../components/CartCard";

const CartPage=()=>{
    const cart=useAppSelector((state)=>
    state.cart.cartItem)
    console.log(cart)
    return <div>
        {cart.map((element)=>
            <CartCard element={element}/>
        )}
    </div>
}


export default CartPage;