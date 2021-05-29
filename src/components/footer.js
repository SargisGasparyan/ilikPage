import React from 'react'
import { Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom'
import Modal from 'react-modal'

 const Footer=()=>{
     const [about,setAbout]=React.useState(false)
     const [kap,setKap]=React.useState(false)
    const changeAbout=()=>{
        setAbout(!about)
    }

    const changeKap=()=>{
        setKap(!kap)
    }
     
     return(
        <div className = 'footer'>
          <div className = "footer-icons">
              <a href="#">
              <i class="fab fa-facebook fa-3x"></i>
              
              </a>
               <a href="#">              
                  <i class="fab fa-instagram fa-3x"></i>
                </a>
          
          </div>
          <div className="footer-info">
            <div className="footer-info-prod">
            <Button onClick={changeAbout} variant="success">Խաղալիքների մասին</Button>{' '}
            </div>
            <Button onClick={changeKap} variant="success">Հետադառփ կապ</Button>{' '}
          </div>  


          {
                about ?(
                    <Modal isOpen={true}>
                    <Zoom className="obsh">
                        <div>
                        <button onClick={changeAbout} className='close'>X</button>
                        <div className="obsh-contact">
                           <p>saaaa mer xaxaliqi masina</p>
                           <p>saaaa mer xaxaliqi masina</p>
                        </div>

                        </div>
                    </Zoom>
             </Modal>
                ):(<p></p>)
            } 
            {
                kap ?(
                    <Modal isOpen={true} >
                    <Zoom>
                        <div className="obsh">
                        <button onClick={changeKap} className='close'>X</button>
                        <div className="obsh-contact">
                            <p>ք․ Վանաձոր</p>
                           <p>Հեռ։ 0000000</p>
                           <p>էլ․ հասցե։ 111111</p>
                        </div>

                        </div>
                    </Zoom>
             </Modal>
                ):(<p></p>)
            } 
        </div>
     )
 }

 export default Footer