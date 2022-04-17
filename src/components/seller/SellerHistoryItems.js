import React from 'react'
import './SellerHistoryItems.css'
const SellerHistoryItems = (props) => {
    const{image,title,price,purchasedby}=props.value;
    return (
        <div className="shi">
        <div className="card d-flex-column">
            <div className="bg-light p-1" style={{width:"100%",height:"50%"}}>
                <img className="card-img-top" style={{ width: "100%", height: "100%", objectFit: "contain" }} src={image} alt="Card image cap" />
            </div>
            <div className="card-body p-0" style={{height:"50%",fontSize:"1vw"}}>
                <h6 className="card-text text-center" style={{borderColor:"rgba(0,0,0,.125)"}}><b>500/-</b></h6>
                <div className="d-flex-column ">
                    <p className=''><strong> Title : </strong>{title}</p>
                    <p className=''><strong>Original Price : </strong>{price}/-</p>
                    <p className=''><strong>Sold To : </strong>{purchasedby}</p>
                   
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default SellerHistoryItems