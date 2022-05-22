import React, { useContext,useEffect } from 'react'
import Contentitem from './Contentitem'
import ProductContext from '../context/Productcontex'
import Loading from './assets/Loading'
import { useNavigate } from 'react-router-dom'
const Content = () => {
  let nav=useNavigate();
  const context = useContext(ProductContext);
  const {productlist,fetch_productlist,handleDetails,loading,createBid}=context;
  useEffect(() => {
    if(!localStorage.getItem('role'))
         return nav('/Welcome');
    fetch_productlist();
  },[])
  
  return (
    <div className="container-fluid pb-4" style={{minHeight:"100px",backgroundColor:"var(--bgcolor)"}}>
      {loading && <Loading/>}
      <div className="container-fluid px-0" >
        <div className="row d-flex justify-content-center">
        { productlist.map((newproductlist)=>{
          return(
            <div className='col-sm-4' key={newproductlist._id}>
                 <Contentitem value={newproductlist} handleDetails={handleDetails} createBid={createBid}/>
            </div>
          )
        })}
           


           











          </div>
        </div>
      </div>
    
  )
}

export default Content