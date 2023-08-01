"use client"
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/store";
import CartCard from "../components/CartCard";
import { totalPrice } from "../redux/Slice/cartSlice";
import { clearAll } from "../redux/Slice/cartSlice";

const CartPage=()=>{
    const dispatch=useAppDispatch()
    const total=useAppSelector(totalPrice)
    const cart=useAppSelector((state)=>
    state.cart.cartItem)
    console.log(cart)
    return <div>
        {cart.map((element)=>
            <CartCard element={element}/>
        )}
        <div>Total Price:{`${total} $`}</div>
        <button onClick={()=>dispatch(clearAll())}>Clear all</button>
    </div>
}


export default CartPage;