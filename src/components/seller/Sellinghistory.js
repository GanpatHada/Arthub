import React, { useContext, useEffect } from 'react'
import SellerHistoryItems from './SellerHistoryItems'
import ProductContext from '../../context/Productcontex'
import './SellerHistoryItems.css'
import image from '../icons/noitem.png'
const Sellinghistory = () => {
  const context = useContext(ProductContext);
  const { soldproduct, fetch_seller_soldproduct} = context;
  useEffect(() => {
    fetch_seller_soldproduct();
  }, [])
  return (
    <div className="shi">
      
      <div className="container-fluid" >
        <div className="ucontainer">
          <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>Selling History</strong></h4>
          </div><hr />
         
          <div className="row px-4 pb-4">
            { (soldproduct.length===0)? <div className='d-flex justify-content-center'><img src={image} style={{position:"absolute"}} alt=".." id='noitem' /></div>:
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