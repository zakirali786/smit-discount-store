import Login from "../component/login"
import {Routes , Route } from "react-router-dom"
import Home from "../component/home"
import Signup from "../component/signup"
import Cart from "../component/cart"
import { OrderDetails } from "../component/OrderDetails"

const AppRouter  = () =>{
             return(
  <Routes>
  <Route path ="/login" element={<Login />} />
  <Route path ="/signup" element={<Signup />} />
  <Route path ="/" element={<Home />} />
  <Route path ="/cart" element={<Cart />} />
  <Route path="/orderDetails" element={<OrderDetails />} />
</Routes>     
)}
export default AppRouter;
