import React from 'react'
import { connect } from 'react-redux'
import {removeProduct} from '../actions/changeCart'
import {Fade} from 'react-reveal'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slidebar=({items,removeProduct})=>{
    return(
        <div className='slidebar'>
            <Fade right cascade>
            {items.length==0?(<p className="pe"> Դուք խաղալիք չունեք քարտի վրա</p>):(<p className="pek"> Դուք ունեք քարտի վրա {items.length} խաղալիք </p>)}
            {items.length !==0 ? (
                items.map((item)=>(
                    <div className="botbord">
                        <div className='slidebar-cart'>
                            <ul>
                                <li key={item._id}>
                                   
                                        <img src={item.image}/>
                                    
                                    <div className='info'>
                                        <div className="info-text">
                                            <p>{item.title}</p>
                                            <p>{item.price} դ․</p>
                                        </div>
                                        <Button variant="outline-danger" onClick={()=>removeProduct(item)} className='rmv'> Հեռացնել</Button>{' '} 
                                    </div>
                                </li> 
                            </ul>
                      </div>
                      
                    </div>
                ))
            ):(<p></p>)
            }
            </Fade>
            <Fade left cascade>
            {  items.length !==0 &&  
            <div className='process'>
                <h4>Ընդհանուր։ {items.reduce((a,c)=>a+c.count*c.price,0)} դ․</h4>
                <Button variant="outline-success"> 
                <a href="https://www.facebook.com/ilik.handmade021" className='a' target="_blank">Կատարել գնում</a>     
                </Button>{' '}                             
            </div>
            }
            </Fade>
        </div>
    )
    
}

export default connect((state)=>(
    {items:state.cart.cartItems}),{removeProduct})
    (Slidebar)
