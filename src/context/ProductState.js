import React, { useState } from "react";
import ProductContext from "./Productcontex";
const ProductState=(props)=>{

    
  const [unsoldproduct, setunsoldproduct] = useState([])
  const [soldproduct, setsoldproduct] = useState([])
  const [loading, setloading] = useState(true)
  const [wishlist, setwishlist] = useState([])
  const [mystore, setmystore] = useState([])

    //api request for fetching requeste product to sell
            const fetch_seller_unsoldproduct =async()=>
            {
            const response = await fetch("http://localhost:8000/api/seller/fetchsellerproduct", {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",
                    'auth-token':localStorage.getItem('token')
                },
                
            });
            
            const json = await response.json();
            setloading(false)
            setunsoldproduct(json)
            } 


            //sellr sold product api
            const fetch_seller_soldproduct =async()=>
            {
            const response = await fetch("http://localhost:8000/api/seller/fetchsellersoldproduct", {
                method: 'GET',
                headers: {
                    'Content-type': "application/json",
                    'auth-token':localStorage.getItem('token')
                },
                
            });
            
            const json = await response.json();
            setloading(false)
            if(!json.success)
               return alert("something went wrong")
            else
              { 
                  setsoldproduct(json.sellersoldproduct);
                  
              }
               
            }
            
            //seller sold product api
            const sellproduct=async(product_id)=>
            {
                const response = await fetch(`http://localhost:8000/api/seller/updatestatus/${product_id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-type': "application/json",
                        'auth-token':localStorage.getItem('token')
                    },
                    
                });
            const json = await response.json();
            if(json.success)
                 alert("sold succssfully");
            else
                 console.log(json.message);     
            }  

 //----------------------------------------------buyer functions----------------------------------------//
 
 const fetch_user_Wishlist =async()=>
 {
 const response = await fetch("http://localhost:8000/api/user/wishlist", {
     method: 'GET',
     headers: {
         'Content-type': "application/json",
         'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YmM1ZWMxNzk2ZWViNmFjODFhMGQxIn0sImlhdCI6MTY1MDE4ODY4NX0.ZK0RPGd_tOUmqZaHmQztq-HsWog0XdZtRbrhE1mNRlU"
     },
     
     
 });
  
 const json = await response.json();
 setloading(false)
 setwishlist(json.wishlist)
 } 


 const fetch_user_myStore =async()=>
 {
 const response = await fetch("http://localhost:8000/api/user/mystore", {
     method: 'GET',
     headers: {
         'Content-type': "application/json",
         'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1YmM1ZWMxNzk2ZWViNmFjODFhMGQxIn0sImlhdCI6MTY1MDE4ODY4NX0.ZK0RPGd_tOUmqZaHmQztq-HsWog0XdZtRbrhE1mNRlU"
     },
     
     
 });

 const json = await response.json();
 setloading(false)
 setmystore(json.mystore)
 } 

    return(
        <ProductContext.Provider value={{unsoldproduct,wishlist,mystore,loading,fetch_seller_unsoldproduct,sellproduct,soldproduct,fetch_seller_soldproduct,fetch_user_Wishlist,fetch_user_myStore}}>
            {props.children}
        </ProductContext.Provider>
    )

}
export default ProductState;