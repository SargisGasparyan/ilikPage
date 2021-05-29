import {ADD_TO_CARTS,REMOVE_TO_CARTS} from '../types'
export const addToCart=(product)=>(dispatch,getState)=>{
    const cartItems = getState().cart.cartItems.slice()
    let exist=false
    cartItems.forEach(element => {
        if(element._id == product._id){
            element.count++
            exist=true
        }
    });
    if(!exist){
        cartItems.push({...product,count:1})
    }
    dispatch({
        type:ADD_TO_CARTS,
        payload:{products:cartItems}
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems))

}

export const removeProduct=(product)=>(dispatch,getState)=>{
    const cartItems = getState().cart.cartItems.slice().filter((item)=>item._id !== product._id)
    dispatch({
        type:REMOVE_TO_CARTS,
        payload:{products:cartItems}
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems))

}