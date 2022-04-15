import React, { useEffect } from 'react'
import Requestitems from './Requestitems'
import { useContext } from 'react'
import ProductContext from '../../context/Productcontex'
import Spinner from '../Spinner'
const Buyrequest = () => {
  const context=useContext(ProductContext);
  const {product,fetchsellerproduct}=context;
  useEffect(() => {
      document.getElementById("headerimage").style.display="none"
      fetchsellerproduct();
      
  })
  
  return (
    <div className="container-fluid p-3 " style={{backgroundColor:"skyblue"}}>
        <div className="ucontainer" style={{backgroundColor:"white",borderRadius:"4px"}}>
        <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>Buy Requests</strong></h4>
        </div><hr /><hr />
            {product.map((newproduct)=>{
              return(
                <Requestitems key={newproduct._id} value={newproduct}/>
              )
            })}
            
            </div>
    </div>
    
  )
}

export default Buyrequest