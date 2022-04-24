import React, { useEffect } from 'react'
import Requestitems from './Requestitems'
import { useContext } from 'react'
import ProductContext from '../../context/Productcontex'
const Buyrequest = () => {
  const context=useContext(ProductContext);
  const {unsoldproduct,fetch_seller_unsoldproduct,sellproduct,sendAlert}=context;
  useEffect(() => {
      document.getElementById("headerimage").style.display="none"
      fetch_seller_unsoldproduct();
      
  },[fetch_seller_unsoldproduct,sellproduct])
  
  return (
    <div className="container-fluid p-3 " style={{backgroundColor:"var(--bgcolor)"}}>
        <div className="ucontainer" style={{backgroundColor:"white"}}>
        <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>Buy Requests</strong></h4>
        </div><hr />
            {unsoldproduct.map((newproduct)=>{
              return(
                <Requestitems key={newproduct._id} value={newproduct} sellproduct={sellproduct} sendAlert={sendAlert}/>
              )
            })}
            
            </div>
    </div>
    
  )
}

export default Buyrequest