
export const ADD2CART = (product) =>{
    return{
        type: 'ADD_CART',
        payload: product
    }
}

export const REMOVEPRODUCT = (product) =>{
    return{
        type: 'REMOVE_PRODUCT',
        payload: product
    }
}

export const GETPRODUCT = (product) =>{
    return{
        type: 'GET_PRODUCT',
        payload: product
    }
}
