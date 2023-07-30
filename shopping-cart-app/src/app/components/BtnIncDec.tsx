"use client"
import React from "react";

interface Props
{
    onIncrease:()=>{};
    onDecrease:()=>{};
    qty:number;
}

const BtnIncDec=(props:Props)=>{
    return <div>
        <button onClick={props.onIncrease}>+</button>
        <p>{props.qty}</p>
        <button onClick={props.onDecrease}>-</button>
    </div>
}

export default BtnIncDec;