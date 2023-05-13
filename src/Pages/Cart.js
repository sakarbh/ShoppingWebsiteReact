import React, { useState , useEffect } from 'react'
import CartItems from '../Components/CartItems'
import { useSelector } from 'react-redux'
const Cart = () => {
   const getData = useSelector((state)=> state.cartReducer.carts)
    console.log(getData)
    let products = getData
    //const [sum, setSum]=useState(0);

    const getTotalPrice = (products)=>{
       const arrPrice = products.map((product) => (product.price*product.count))
       let sum=0
       arrPrice.forEach(item=> sum+=item)
      return sum
    }

    useEffect(()=>{
      getTotalPrice(products)
      },[products]);

  return (
    <div>
      <h2>Your shopping cart</h2>
      <h3>Total Price of items = $ {getTotalPrice(products)}</h3>

    <div>
      {products?.length > 0 ? (
        <div className="container">
          {products.map((product) => (
            <CartItems product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h3>Please add products to your cart</h3>
        </div>
      )}
    </div>
  </div>
  )
}

export default Cart