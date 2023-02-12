import Login from "../component/login"
import {Routes , Route } from "react-router-dom"
import Home from "../component/home"
import Signup from "../component/signup"
import Cart from "../component/cart"

const AppRouter  = () =>{
             return(
  <Routes>
  <Route path ="/login" element={<Login />} />
  <Route path ="/signup" element={<Signup />} />
  <Route path ="/" element={<Home />} />
  <Route path ="/cart" element={<Cart />} />
</Routes>     
)}
export default AppRouter;
