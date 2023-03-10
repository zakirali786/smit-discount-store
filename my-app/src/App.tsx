// @ts-nocheck

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./component/login"
import AppRouter from "./approuter/index"
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import shoppingCart from "./component/imgs/shopping-cart.png"
function App() {
  return (
    <div className="App">
           <Menu id="nav"
                    
                    style={{ color:"white", background:"green",}}
                mode="horizontal"
                 
                items={[
                            {
                                label: (<Link to ="/" >home</Link>),
                                key: "home",
                            }, 
                            {
                                label: (<Link to ="/cart" ><img width="100%" height="50%" style={{marginTop:'10px'}} src={shoppingCart} /></Link>),
                                key:"cart", 
                            }
                        ]}
                    > </Menu>
    <AppRouter />
    </div>
  );
}

export default App;
