import {GET_PRODUCTS,FILTER_PRODUCTS_BY_SIZE,FILTER_PRODUCTS_BY_PRICE} from '../types'

export const sortReducers=(state={},action)=>{
    switch(action.type){
        case GET_PRODUCTS:
            return{
                ...state,
                products:action.payload.products,
                filteredProducts:action.payload.products
            }
        case FILTER_PRODUCTS_BY_SIZE:
            return{
                ...state,
                size:action.payload.size,
                filteredProducts:action.payload.products
            }
        case FILTER_PRODUCTS_BY_PRICE:
            return{
                ...state,
                sort:action.payload.sort,
                filteredProducts:action.payload.products
            }
        default:
            return state
    }
}