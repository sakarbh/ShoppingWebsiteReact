import React from "react";
import "./App.css"
import {BrowserRouter, Routes , Route, } from "react-router-dom";
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import ProductDetails from "./Components/ProductDetails"
import Products from "./Pages/Products"
import Header from "./Components/Header";
const App = () =>{

  return <BrowserRouter>
  <Header/>
  <Routes>
<Route path = "/" element ={<Home/>}/>
<Route path = "/cart" element ={<Cart/>}/>

<Route path = "/singleproductdetails" element ={<ProductDetails/>}/>

<Route path = "/products" element ={<Products/>}/>

  </Routes>
  </BrowserRouter>
}


export default App
