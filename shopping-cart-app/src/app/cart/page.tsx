"use client"
import React from "react";
import { useAppSelector } from "../redux/store";
import CartCard from "../components/CartCard";

const CartPage=()=>{
    const cart=useAppSelector((state)=>
    state.cart.cartItem)

    return <div>
        {cart.map((element)=>
            <CartCard key={element.product.id} element={element}/>
        )}
    </div>
}


export default CartPage;