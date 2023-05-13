import React from "react";
import { useState, useEffect } from "react";
import FeatureSection from "../Components/FeatureSection";
const Products = () => {
  let [component , setComponent] = useState(null)
  let [category , setCategory] =useState('')
  const filterProducts = (category) => {
    component = (
      <div>
        <FeatureSection category={category}/>
        </div>
    )
    console.log(category)
    setComponent(component)
  }
  useEffect( ()=>{
    filterProducts(category)},[category]);
  
  return (
    <div className="app">
      <h1 >Products</h1>
      <div className="app">
      <div className="search">
        <input placeholder="Search for products" />
      </div>
      <hr />
      <div className="menu-tabs-container">
      <button className="button button2" onClick={() => setCategory('/category/jewelery')}>Jewelery</button>
      <button className="button button2" onClick={() => setCategory("/category/men's clothing")}>Men Clothing</button>
      <button className="button button2" onClick={() => setCategory("/category/women's clothing")}>Women Clothing</button>
      <button className="button button2" onClick={() => setCategory('/category/electronics')}>Electronics</button>
      <button className="button button2" onClick={() => setCategory('')}>All Products</button>
    </div>
    <h3>{category.slice(10)}</h3>
    <div>{component}</div>
      </div>
      
    </div>
  );
};

export default Products;
