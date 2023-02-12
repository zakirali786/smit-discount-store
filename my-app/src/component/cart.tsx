// @ts-nocheck
import React from 'react'
import {useSelector} from "react-redux"
export default function Cart() {
    const cartData = useSelector(state => state.cart)
    console.log({cartData})
  return (
    <div id='cart'>
       <table>
        <tr>td123</tr>
       </table>
      
    </div>
  )
}
