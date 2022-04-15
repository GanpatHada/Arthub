import React, { useState } from "react";
import ProductContext from "./Productcontex";
const ProductState=(props)=>{
  const [product, setproduct] = useState([])
    //api request for fetching requeste product to sell
            const fetchsellerproduct =async()=>
            {
            const response = await fetch("http://localhost:8000/api/seller/fetchsellerproduct", {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",
                    'auth-token':localStorage.getItem('token')
                },
                
            });
            const json = await response.json();
            setproduct(json)
          }   
    return(
        <ProductContext.Provider value={{product,fetchsellerproduct}}>
            {props.children}
        </ProductContext.Provider>
    )

}
export default ProductState;