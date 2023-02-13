// @ts-nocheck

import {createSlice} from "@reduxjs/toolkit"
 
export const DiscountStoreSlice = createSlice({
    name: "discountStore",   
    initialState: {
        product:[
        {name: "item1" , price: "300" , key: 1},
        
        {name: "item2" , price: "400" , key: 2}, 
        
        {name: "item3" , price: "200" , key: 3}
    ],
    user: null,
    cart: []
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload
            console.log(state, action.payload)
        },
        addToCart: (state , action) =>{
           state.cart.push(action.payload)
        },
        
    }
 })
 export const { addUser , addToCart , filterCart} = DiscountStoreSlice.actions