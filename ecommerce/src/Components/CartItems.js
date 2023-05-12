import React from "react";
import { useDispatch } from "react-redux";
import { ADD2CART, REMOVEPRODUCT } from "../redux/actions/action";


const CartItems = ({product}) =>{

    const dispatch = useDispatch();
    const sendData =(e)=>{
    dispatch(ADD2CART(e))}
    const removeData =(i)=>{
        dispatch(REMOVEPRODUCT(i))
    }

    
    

    return(
           <div className="movie">
            <div>
                <h3>{product.category}</h3>
            </div>
            <div>
                <img src={product.image !== 'N/A' ? product.image : "htttps.//via.placeholder.com/400"} alt={product.description} />
            </div>
            <div>
                <span>{product.title}</span>
                <h3>${product.price} </h3>
                
                <button className="button button2" onClick={() => { sendData(product); } }><strong>+</strong></button>
                <button className="button button3"><strong>{product.count}</strong></button>
                <button className="button button2" onClick={() => { removeData(product); } }><strong>-</strong></button>
                
    
            </div>
            </div>
            
                    
                    
                
    )

}

export default CartItems
