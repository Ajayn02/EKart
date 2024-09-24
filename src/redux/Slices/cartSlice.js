import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
           const existing=state.cart.find(item=>item.id==action.payload.id)
           if(existing){
                existing.quantity+=1
                state.cart=state.cart.filter(item=>item.id!=action.payload.id)
                state.cart.push(existing)
                toast.success("item Quantity increased")
           }else{
                const product=action.payload
                product.quantity=1
                // console.log(product);
                state.cart.push(product)
                toast.success("Product Added to cart")
           }
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            toast.success("product Removed from Cart")
        },
        increaseQuanntity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decreaseQuantity(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
            }else{
                existing.quantity--
            }
        },
        checkout(state,action){
            state.cart=[]
            toast.success("Checkout Success")
        }
    }
})

export default cartSlice.reducer
export const {addToCart,removeFromCart,increaseQuanntity,decreaseQuantity,checkout}=cartSlice.actions