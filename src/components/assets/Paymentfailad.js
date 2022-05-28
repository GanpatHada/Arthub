import React, { useEffect } from 'react'
import { useContext } from 'react';
import ProductContext from '../../context/Productcontex'
const Paymentfailad = () => {
    useEffect(() => {
        document.getElementById("searchbox").style.display="none";
        document.getElementById("mainart").style.display="none";
      },[])
  const context=useContext(ProductContext);
  const {paymentfaileddetails}=context;
  const{code,description,source,reason,metadata}=paymentfaileddetails;
  return (
    <div style={{margin:"100px 0px 40px 0px",padding:" 0px 20px"}}>
        <h3 style={{color:"red"}}>Payment Failed ! </h3>
        <p><strong> Your Payment has been failed please try again</strong></p>
       
        <h6><strong>Error code : </strong> {code}</h6>
        <h6><strong>Description : </strong> {description}</h6>
        <h6><strong>source : </strong> {source}</h6>
        
    </div>
  )
}

export default Paymentfailad