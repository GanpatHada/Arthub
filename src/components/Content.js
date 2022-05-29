import React, { useContext, useEffect } from 'react'
import Contentitem from './Contentitem'
import ProductContext from '../context/Productcontex'
import Loading from './assets/Loading'
import { useNavigate } from 'react-router-dom'
import image from './icons/noitem.png'
const Content = () => {
  let nav = useNavigate();
  const context = useContext(ProductContext);
  const { productlist, fetch_productlist, handleDetails, loading, createBid } = context;
  useEffect(() => {
    if (!localStorage.getItem('role'))
      return nav('/Welcome');
    fetch_productlist();
  }, [])

  return (
    <div className="container-fluid pb-4" style={{ minHeight: "100vh", backgroundColor: "var(--bgcolor)" }}>
      {loading ? <Loading /> :
        <div className="container-fluid px-0" >
          <div className="row d-flex justify-content-center">
            {(productlist.length === 0) ? <div className='d-flex justify-content-center'><img src={image} style={{ position: "absolute" }} alt=".." id='noitem' /></div> :
              productlist.map((newproductlist) => {
                return (
                  <div className='col-sm-4' key={newproductlist._id}>
                    <Contentitem value={newproductlist} handleDetails={handleDetails} createBid={createBid} />
                  </div>
                )
              })}
















          </div>
        </div>
      }
    </div>

  )
}

export default Content