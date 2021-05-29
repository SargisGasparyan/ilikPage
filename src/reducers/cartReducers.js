import {ADD_TO_CARTS,REMOVE_TO_CARTS} from '../types'
export const changeCart=(state={cartItems:JSON.parse(localStorage.getItem("cartItems") || '[]')},action)=>{
    switch(action.type){
        case ADD_TO_CARTS:
            return{
                cartItems:action.payload.products
            }
        case REMOVE_TO_CARTS:
            return{
                cartItems:action.payload.products
            }
        default:
            return state
    }
    
}