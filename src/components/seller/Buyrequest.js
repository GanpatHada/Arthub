import React, { useEffect,useState } from 'react'
import Requestitems from './Requestitems'
import { useContext } from 'react'
import ProductContext from '../../context/Productcontex'
import image from '../icons/noitem.png'
const Buyrequest = () => {
  const [triggred, settriggred] = useState(false)
  const context = useContext(ProductContext);
  const { unsoldproduct, fetch_seller_unsoldproduct,approveproduct,handleDetails} = context;
  const handleapproval = (productid)=>{
    approveproduct(productid);
    settriggred(true)

}
  useEffect(() => {
    document.getElementById("searchbox").style.display = "none";
    document.getElementById("mainart").style.display = "none";
   
    fetch_seller_unsoldproduct();


  },[triggred])

  return (
    <div id="buyrequestcontainer">
      <div className="header py-3 mt-3 px-2 d-flex align-items-end justify-content-center" >
        <h2><strong>Buy Requests</strong></h2>
      </div>
      <div className="container-fluid p-3 pt-0">
        {(unsoldproduct.length === 0) ?<div className='d-flex justify-content-center'><img src={image} alt=".." id='noitem2' height="200px" /></div>:
         unsoldproduct.map((newproduct) => {
            return (
              <Requestitems key={newproduct._id} value={newproduct} handleapproval={handleapproval} productDetails={handleDetails}/>
            )
          })}
      </div>

    </div>

  )
}

export default Buyrequest