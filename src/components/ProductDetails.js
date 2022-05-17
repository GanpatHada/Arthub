import React, { useEffect,useContext } from 'react'
import ProductContext from '../context/Productcontex'
const ProductDetails = () => {
  const context = useContext(ProductContext);
  const{details}=context;
  const{_id,title,description,price,sellerid,category,bid,purchasedby}=details;
  return (
    <div className="container bg-light mt-4 pt-4 sellitem mx-auto mb-3" style={{position:"relative",width:"95%",border:"1px solid #d3d0d0",borderRadius:"5px"}}>
        <div className="detailsheading  d-flex align-content-center justify-content-center py-2">
            <h4 style={{color:"#0eafed"}}><b className='my-auto text-center'>Product-Details</b></h4>
        </div>
        <div className="title mt-4">
            <strong>title :</strong>  {title}
        </div><hr />
        <div className="id mt-4">
            <strong>Product id. : </strong><span style={{color:"#0eafed"}}>{_id}</span>
        </div>
        <hr />
        <div className="title">
            <strong>Description : </strong>{description}
        </div>
        <hr />
        <div className="title">
            <strong>category : </strong>{category}
        </div>
        <hr />
        <div className="title">
            <strong>Original price : </strong>{price}
        </div>
        <hr />
        <div className="title">
            <strong>Seller id : </strong>{sellerid}
        </div>
        <hr />
        <div className="Currentbid :">
            <strong>Current bid : </strong>{bid}
        </div>
        <hr />
        <div className="Bidby mb-4:">
            <strong>Bid by : </strong>{purchasedby}
        </div><hr style={{visibility:"hidden"}}/>
        
    </div>
  )
}

export default ProductDetails