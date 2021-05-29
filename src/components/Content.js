import React from 'react'
import { connect } from 'react-redux'
import {getProducts} from '../actions/sortProducts'
import {addToCart} from '../actions/changeCart'
import data from '../data.json'
import {Fade} from 'react-reveal'
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
const Content=({allProducts,getProducts,addToCart})=>{
    React.useState(()=>{
        getProducts(data.products)
    },[])
    const [product,setProduct]=React.useState(null)
    const openModal=(product)=>{
        setProduct(product)
    }
    const closeModal=()=>{
        setProduct(null)
    }

    return(  
        <div className='content'>
            <Fade bottom cascade>
            {!allProducts?(<div>Loading...</div>):
                (allProducts.map((toll)=>(
                <ul className='content-struct' key={toll._id}>
                <img src = {toll.image}  onClick={()=>openModal(toll)}></img> 
                <div className = "content-struct-disc">
                    <h5>{toll.title}</h5>
                    <h5>{toll.price} դ․</h5>
                     <Button variant="outline-success" onClick={()=>addToCart(toll)}> Ավելացնել զամբյուղում</Button>{' '} 

                </div>     
                </ul>
            )))}
            </Fade>
            {
                product ?(
                    <Modal isOpen={true}>
                    <Zoom>
                        <div>
                        <button onClick={closeModal} className='close'>X</button>
                        <div className="product-details">
                            <img src={product.image} alt={product.title}></img>
                            <div className="product-details-description">
                                <p>
                                    <strong>անուն ազգանուն կամ ինչոր բնութագիր{product.title}</strong>
                                </p>
                                <p>
                                Առկա չափեր։  
                                {
                                product.availableSizes.slice(1,).map((x)=>(
                                    <span>
                                        {" "}
                                        <button className='product-details-description-but1'>{x} սմ</button>
                                    </span>
                                ))
                                }                           
                                </p>
                                <button className='product-details-description-but2' onClick={()=>{addToCart(product); closeModal()}}>Ավելացնել զամբյուղում</button>
                            </div>
                        </div>

                        </div>
                    </Zoom>
             </Modal>
                ):(<p></p>)
            }
        </div>
    )  
}

export default connect((state)=>({allProducts:state.products.filteredProducts}),{getProducts,addToCart})(Content)
