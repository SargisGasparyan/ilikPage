import React from 'react'
import {filterSizeProducts,filterPriceProducts} from '../actions/sortProducts'
import { connect } from 'react-redux'

const Filter=({filterSizeProducts,allProducts,size,sort,filteredProducts,filterPriceProducts})=>{
    
    return(
        <div className ="filter">
        {/* {!filteredProducts?(<h2>Loooaading</h2>):(<p>խաղալիքների թիվը ։ {filteredProducts.length}</p>)} */}
            <select onChange={(e)=>filterSizeProducts(allProducts,e.target.value)} value={size}>
                <option value='all'>Չափսեր</option>
                <option value='10'>10սմ</option>
                <option value='20'>20սմ</option>
                <option value='30'>30սմ</option>
                <option value='40'>40սմ</option>
                <option value='50'>50սմ</option>
            </select>
            <select onChange={(e)=>filterPriceProducts(filteredProducts,e.target.value)} value={sort}>
                <option value='all'>Դասակարգել </option>
                <option value='lowest'>Աճող</option>
                <option value='highest'>Նվազող</option>
            </select>
        </div>
    )
}

export default connect((state)=>({allProducts:state.products.products,
                                    filteredProducts:state.products.filteredProducts,
                                    size:state.products.size,
                                    sort:state.products.sort}),
                                    {filterSizeProducts,filterPriceProducts})
                                    (Filter)
