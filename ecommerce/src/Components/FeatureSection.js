import React from "react";
import ProductCard from "./ProductCard";
import { useState } from "react";
import { useEffect } from "react";
const url ='https://fakestoreapi.com/products'
const FeatureSection = ({category}) => {
  const [products, setProducts] = useState([]);

    const featureProducts = async (category) => {
    const response = await fetch(`${url}${category}`);
    const items = await response.json();
    items.map((item) => (item.count = 1))
    console.log(items)
    setProducts(items);}
  

  useEffect(()=>{
    featureProducts(category)
    },[category])
   
  return (
    <div>
      
      <div>
        {products?.length > 0 ? (
          <div className="container">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No products found</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;
