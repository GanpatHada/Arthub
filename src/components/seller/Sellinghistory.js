import React, { useContext, useEffect } from 'react'
import SellerHistoryItems from './SellerHistoryItems'
import ProductContext from '../../context/Productcontex'
import './SellerHistoryItems.css'
import image from '../icons/noitem.png'
const Sellinghistory = () => {
  const context = useContext(ProductContext);
  const { soldproduct, fetch_seller_soldproduct,handleDetails} = context;
  useEffect(() => {
    document.getElementById("searchbox").style.display="none";
    document.getElementById("mainart").style.display="none";
    fetch_seller_soldproduct();
  }, [])
  return (
    <div className="shi" id="mystore">
      <div className="header py-2 px-2 d-flex justify-content-center align-items-center" >
            <h2><strong>My Sellings</strong></h2>
      </div>
      <div className="container-fluid" >
        <div className="ucontainer">
          
          <div className="row px-2 pb-4">
            {
              soldproduct.map((newsoldproduct) => {
                return (
                  <div className="col-sm-4" key={newsoldproduct._id}>
                    <SellerHistoryItems value={newsoldproduct} handleDetails={handleDetails} />
                  </div>
                )
              })}


          </div>


        </div>
      </div>
    </div>
  )
}

export default Sellinghistory