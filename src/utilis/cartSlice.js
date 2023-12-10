import { createSlice } from "@reduxjs/toolkit";

const cartItems=localStorage.getItem('cartItems')!==null?JSON.parse(localStorage.getItem('cartItems')):[]



const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:cartItems
    },

reducers:{
addItem:(state,action)=>{
state.items.push(action.payload)
//local storage for save cartitems
localStorage.setItem('cartItems',JSON.stringify(state.items.map((item)=>item)))
},
removeItem:(state)=>{
state.items.pop()
},
clearCart:(state)=>{
state.items.length=0
}
}

})
export const {addItem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer;