import React, { FC } from 'react'
import UserDummy from "./imgs/profile.png"
interface IProps {}

export const OrderDetails:FC<IProps> = (props) => {
  return (
    <div>
        <h2>Settings</h2>
        <img src={UserDummy} />
        <h3>Order Details</h3>
        
    </div>
   )
 }
