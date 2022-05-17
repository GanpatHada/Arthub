import React, { useEffect } from 'react'
import Requestitems from './Requestitems'
import { useContext } from 'react'
import ProductContext from '../../context/Productcontex'
import image from '../icons/noitem.png'
const Buyrequest = () => {
  const context=useContext(ProductContext);
  const {unsoldproduct,fetch_seller_unsoldproduct,sellproduct,sendAlert}=context;
  useEffect(() => {
      fetch_seller_unsoldproduct();
      
  },[])
  
  return (
    <div className="container-fluid p-3 " style={{backgroundColor:"var(--bgcolor)"}}>
        <div className="ucontainer" style={{backgroundColor:"white",minHeight: "calc(100vh - 113px)"}}>
        <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>Buy Requests</strong></h4>
        </div><hr />
            {(unsoldproduct.length===0)?
            
              <div className='d-flex justify-content-center'><img src={image} style={{position:"absolute"}} alt=".." id='noitem2' height="200px" /></div>
             :
            unsoldproduct.map((newproduct)=>{
              return(
                <Requestitems key={newproduct._id} value={newproduct} sellproduct={sellproduct} sendAlert={sendAlert}/>
              )
            })}
            
            </div>
    </div>
    
  )
}

export default Buyrequest