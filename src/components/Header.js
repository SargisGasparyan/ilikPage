import React from 'react'
import logo from '../images/logo.jpg'

const Header=()=>{
    return(
        <div className='header'>
            <div className="header-img">
                <img src={logo}/>
            </div>
            <div className="header-text">
                <h1>Բարի Գալուստ Իլիկ</h1>
            </div>  
        </div>
    )
}
export default Header