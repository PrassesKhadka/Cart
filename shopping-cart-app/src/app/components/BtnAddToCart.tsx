"use client"
import React from "react";
import { Product } from "../interface/interfaces";
import { useAppDispatch,useAppSelector } from "../redux/store";
import { addToCart,removeFromCart } from "../redux/Slice/cartSlice";
import { quantitySelector } from "../redux/Slice/cartSlice";
import BtnIncDec from "./BtnIncDec";

interface Props
{
    element:Product;
}

const BtnAddToCart=(props:Props)=>{
    const dispatch=useAppDispatch()
    const qty=useAppSelector((state)=>
        quantitySelector(state,props.element.id))


    return <div>
        {(!qty) ? <button onClick={()=>dispatch(addToCart(props.element))}>Add To Cart</button>
        : <BtnIncDec onIncrease={()=>{dispatch(addToCart(props.element))}} onDecrease={()=>{dispatch(removeFromCart(props.element))}} qty={qty}/>}
    </div>



}

export default BtnAddToCart;