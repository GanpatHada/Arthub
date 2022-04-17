import React, { useContext, useEffect, useState } from 'react'
import ProductContext from '../../context/Productcontex'
import Mystoreitems from './Mystoreitems';
import '../seller/SellerHistoryItems.css'
const Mystore = () => {
  const context = useContext(ProductContext);
  const { mystore, fetch_user_myStore} = context;
  useEffect(() => {
    document.getElementById("headerimage").style.display = "none";
    fetch_user_myStore();
  }, [fetch_user_myStore])
  return (
    <div className="shi">
      
      <div className="container-fluid" >
        <div className="ucontainer">
          <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>My Store</strong></h4>
          </div><hr />
          <div className="row px-4 pb-4">
            {
              mystore.map((newmystore) => {
                return (
                  <div className="col-sm-4" key={newmystore._id}>
                    <Mystoreitems value={newmystore} />
                  </div>
                )
              })}


          </div>


        </div>
      </div>
    </div>
  )
}

export default Mystore