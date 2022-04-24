import React, { useContext, useEffect } from 'react'
import SellerHistoryItems from './SellerHistoryItems'
import ProductContext from '../../context/Productcontex'
import './SellerHistoryItems.css'
const Sellinghistory = () => {
  const context = useContext(ProductContext);
  const { soldproduct, fetch_seller_soldproduct} = context;
  useEffect(() => {
    document.getElementById("headerimage").style.display = "none";
    fetch_seller_soldproduct();
  }, [fetch_seller_soldproduct,soldproduct])
  return (
    <div className="shi">
      
      <div className="container-fluid" >
        <div className="ucontainer">
          <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>Selling History</strong></h4>
          </div><hr />
          <div className="row px-4 pb-4">
            {
              soldproduct.map((newsoldproduct) => {
                return (
                  <div className="col-sm-4" key={newsoldproduct._id}>
                    <SellerHistoryItems value={newsoldproduct} />
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