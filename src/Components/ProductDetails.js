import React from 'react'
import { useSelector } from 'react-redux'
import { ADD2CART} from "../redux/actions/action";
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
    const getData = useSelector((state)=> state.prodDetails.singleproduct)
    console.log(getData)
    let product = getData

    const dispatch = useDispatch();
    const sendData =(e)=>{
    dispatch(ADD2CART(e))}


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
        <br/>
         <ul>
            <li><strong>Title:- </strong>{product.title}</li>
            <li><strong>Description:-  </strong>{product.description}</li>
            
            <li><strong>Price:- $ </strong>{product.price}</li>
        </ul>
        <button className="button1"onClick={()=>{ sendData(product)}}>Add to cart</button>
        </div>
      </section>
    </>
  )
}

export default ProductDetails