import React, { useContext,useEffect } from 'react'
import Contentitem from './Contentitem'
import ProductContext from '../context/Productcontex'
import Loading from './assets/Loading'
const Content = () => {
  const context = useContext(ProductContext);
  const {productlist,fetch_productlist,handleDetails,loading,createbid}=context;
  useEffect(() => {
    fetch_productlist();
  },[])
  
  return (
    <div className="container-fluid" style={{minHeight:"100px",backgroundColor:"var(--bgcolor)"}}>
      {loading && <Loading/>}
      <div className="container-fluid" >
        <div className="row d-flex justify-content-center">
        { productlist.map((newproductlist)=>{
          return(
            <div className='col-sm-4' key={newproductlist._id}>
                 <Contentitem value={newproductlist} handleDetails={handleDetails}/>
            </div>
          )
        })}
           


           











          </div>
        </div>
      </div>
    
  )
}

export default Content