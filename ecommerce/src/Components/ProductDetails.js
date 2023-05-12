import React from 'react'
import { useSelector } from 'react-redux'

const ProductDetails = () => {
    let product
    const getData = useSelector((state)=> state.cartReducer.singleproduct)
    console.log(getData[0])
    product = getData[0]
  return (
    <>
    <div className='app'>
      <h1>Product Details</h1>
      </div>
      <section className='menu-tabs-container'>
        <div className='img-area'>
        <img src = {product.image !=='N/A' ? product.image : "htttps.//via.placeholder.com/400"} alt ={product.description}/>
        </div>
        <div className='productDetails'>
        <h2>Details</h2>
        <p><strong>Product</strong></p>
         <ul>
            <li><strong>Description</strong>{product.description}</li>
            <li><strong>Title</strong>{product.title}</li>
            <li><strong>Price</strong>{product.price}</li>
        </ul>
        </div>
      </section>
    </>
  )
}

export default ProductDetails