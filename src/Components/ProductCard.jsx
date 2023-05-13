import React from "react";
import { useDispatch } from "react-redux";
import { ADD2CART, GETPRODUCT} from "../redux/actions/action";
import { useNavigate } from "react-router-dom";


const ProductCard = ({product}) =>{

   const navigate = useNavigate();
   const navigateToSingleProduct =()=>{
    navigate('/singleproductdetails')

  }

    const dispatch = useDispatch();
    const sendData =(e)=>{
    dispatch(ADD2CART(e))}

    const sendProductData =(e)=>{
    dispatch(GETPRODUCT(e))
    navigateToSingleProduct()}

    return(
        <div className="movie">
                    <div>
                    <h3>{product.category}</h3>
                    </div>

                    <div>
                        <img onClick={()=>{ sendProductData(product)}} src={product.image !=='N/A' ? product.image : "htttps.//via.placeholder.com/400"} alt ={product.description} />
                    </div>
                    <div>
                        <span>{product.title}</span>
                        <h3>${product.price} </h3>
                        <button className="button1"onClick={()=>{ sendData(product)}}>Add to cart</button>
                    </div>

                </div>
    )

}

export default ProductCard