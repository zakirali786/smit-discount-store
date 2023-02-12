// @ts-nocheck

import {createSlice} from "@reduxjs/toolkit"
 
export const DiscountStoreSlice = createSlice({
    name: "discountStore",   
    initialState: {
        product:[
        {name: "item1" , price: "000" , key: 1},
        
        {name: "item2" , price: "000" , key: 2}, 
        
        {name: "item3" , price: "000" , key: 3}
    ],
    user: {fullName: "" , email: ""},
    cart: []
    },
    reducers: {
        addUser: (state, action) => {

            state.user.fullName = action.payload.fullname;
            state.user.email = action.payload.email;
            console.log(state, action.payload)
        },
        addToCart: (state , action) =>{
           state.cart.push(action.payload)
        }
    }
 })
 export const { addUser , addToCart } = DiscountStoreSlice.actions