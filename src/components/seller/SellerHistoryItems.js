import React from 'react'
import './SellerHistoryItems.css'
const SellerHistoryItems = (props) => {
    const{image,title,price,purchasedby,bid,_id}=props.value;
    return (
        <div className="shi" id="mystore">
        <div className="card d-flex-column pb-4">
          <div id="mystoreimage" className="p-1">
            <img className="card-img-top" src={image} alt="Card image cap" />
          </div>
          <div className="card-body mt-1 p-0">
  
  
  
            <div className="d-flex-column ps-2">
              <div className="">
                <div>
                  <span className=''><strong> Title : </strong>{title}</span><br />
                  <span className=''><strong> price : </strong>{bid} rs.</span><br />
                  <span className=''><strong> Base price : </strong>{price} rs.</span>
                </div>
                <div className="me-2">
                  <a style={{cursor:"pointer",color:"green"}}onClick={()=>{props.handleDetails(_id)}}>see details</a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
        
    )
}

export default SellerHistoryItems