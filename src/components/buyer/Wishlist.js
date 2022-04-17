import React from 'react'
import { useEffect } from 'react';
import './mycart.css'
import { useContext } from 'react';
import ProductContext from '../../context/Productcontex'
import Wishlistitems from './Wishlistitems';
const Wishlist = () => {
  const context=useContext(ProductContext);
  const {wishlist,fetch_user_Wishlist}=context;
  useEffect(() => {
    document.getElementById("headerimage").style.display = "none";
    fetch_user_Wishlist();
  },[])


  return (
    <div className="container-fluid p-3 " style={{backgroundColor:"skyblue"}}>
        <div className="ucontainer" style={{backgroundColor:"white"}}>
        <div className="header py-2 px-2 d-flex align-items-center">
            <h4><strong>Wishlist</strong></h4>
        </div><hr />
            {wishlist.map((newwishlist)=>{
              return(
                <Wishlistitems key={newwishlist._id} value={newwishlist} />
              )
            })}
            
            </div>
    </div>
    

  )
}

export default Wishlist