// @ts-nocheck
import React from 'react'
import {useSelector} from "react-redux"
export default function Cart() {
    const cartData = useSelector(state => state.cart)
  return (
    <div>Cart</div>
  )
}
