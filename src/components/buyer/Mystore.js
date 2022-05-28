import React, { useContext, useEffect } from 'react'
import ProductContext from '../../context/Productcontex'
import Mystoreitems from './Mystoreitems';
import '../seller/SellerHistoryItems.css'
const Mystore = () => {
  const context = useContext(ProductContext);
  const { mystore, fetch_user_myStore,handleDetails} = context;
  useEffect(() => {
    document.getElementById("searchbox").style.display="none";
    document.getElementById("mainart").style.display="none";
    fetch_user_myStore();
  }, [])
  return (
    <div className="shi" id="mystore">
      <div className="header py-2 px-2 d-flex justify-content-center align-items-center" >
            <h2><strong>My Store</strong></h2>
      </div>
      <div className="container-fluid" >
        <div className="ucontainer">
          
          <div className="row px-2 pb-4">
            {
              mystore.map((newmystore) => {
                return (
                  <div className="col-sm-4" key={newmystore._id}>
                    <Mystoreitems value={newmystore} handleDetails={handleDetails} />
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