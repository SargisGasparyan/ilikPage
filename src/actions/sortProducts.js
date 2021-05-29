import {GET_PRODUCTS,FILTER_PRODUCTS_BY_SIZE,FILTER_PRODUCTS_BY_PRICE} from '../types'
export const getProducts=(products)=>(dispatch)=>{
    dispatch({
        type:GET_PRODUCTS,
        payload: {products:products}
    })
}

export const filterSizeProducts=(products,size)=>(dispatch)=>{
    if(size ==='all'){
        dispatch({
            type:FILTER_PRODUCTS_BY_SIZE,
            payload: {products:products}
        })
    }else{
        dispatch({
            type:FILTER_PRODUCTS_BY_SIZE,
            payload: {products:products.filter((item)=>item.availableSizes.indexOf(parseInt(size))>=0),
                size:size
            }
        })
    }  
}


export const filterPriceProducts=(products,sort)=>(dispatch)=>{
    let data=products.slice()
    if(sort==='highest'){
        data.sort(function (a, b) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            return 0;
          });
    }else if(sort==='lowest'){
        data.sort(function (a, b) {
            if (a.price < b.price) {
              return 1;
            }
            if (a.price > b.price) {
              return -1;
            }
            return 0;
          });
    }

    dispatch({
        type:FILTER_PRODUCTS_BY_PRICE,
        payload:{
            sort:sort,
            products:data
        }
        })

  
   
}