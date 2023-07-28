import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product,CartItem } from "@/app/interface/interfaces";

//interface used to describe the shape of objects

interface Cart
{
    cartItem:CartItem[];
}

const initialState:Cart={
    cartItem:[]
}

const cart=createSlice({
    name:'cart',
    initialState,
    reducers:{
        //yo function le return garne hoina state change garne ho
        addToCart:(state,action:PayloadAction<Product>)=>{
            const item=state.cartItem.find((value)=>
                value.product.id===action.payload.id
            )
            if(item)
                item.quantity++;
            else {
                state.cartItem.push({
                    product:action.payload,
                    quantity:1,
                })
            }
        },

        removeFromCart:(state,action:PayloadAction<Product>)=>{
            const item=state.cartItem.find((value)=>value.product.id===action.payload.id)
            if(item)
            {
                item.quantity--;
                if(item.quantity===0)
                {
                    state.cartItem.filter((value)=>value.product.id===action.payload.id)
                }
            }
        }



    },
})