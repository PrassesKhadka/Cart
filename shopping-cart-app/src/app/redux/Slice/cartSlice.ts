import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Product,CartItem } from "@/app/interface/interfaces";
import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";
//interface used to describe the shape of objects

interface Cart
{
    cartItem:CartItem[],
    cartVisible:boolean,
}

const initialState:Cart={
    cartItem:[],
    cartVisible:false
}

export const cartSlice=createSlice({
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
                    state.cartItem=state.cartItem.filter((value)=>value.product.id!=action.payload.id)
                }
                else 
                    return
            }
        },

        clearAll:(state)=>{
            //An empty array
            //You can empty an array by state.cartItem.length=0
            //but do not directly change the state
            const array:CartItem[]=[];
            state.cartItem=array;
        },

        deleteForEach:(state,action:PayloadAction<Product>)=>{
            state.cartItem=state.cartItem.filter((element)=>
                element.product.id!=action.payload.id
            )
        },

        toggleCart:(state)=>{
            state.cartVisible=!state.cartVisible
        }
    },
})

// Selectors defined here
const cart=(state:RootState)=>state.cart.cartItem;

export const quantitySelector=createSelector([cart,(cart,id:number)=>
    id],(cart,id)=>
        cart.find((element)=>
            element.product.id===id)?.quantity)

export const totalQuantitySelector=createSelector([cart],(cart)=>{
    return cart.reduce((total:number,element:CartItem)=>
        (total+=element.quantity),0
    )
})

export const totalPrice=createSelector([cart],(cart)=>{
    return cart.reduce((total:number,value:CartItem)=>(total+=value.product.price*value.quantity),0
)})


export const {addToCart,removeFromCart,clearAll,deleteForEach,toggleCart}=cartSlice.actions;
export default cartSlice;