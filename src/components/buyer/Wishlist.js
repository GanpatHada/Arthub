import React from 'react'
import { useEffect } from 'react';
import './mycart.css'
import { useContext } from 'react';
import ProductContext from '../../context/Productcontex'
import Wishlistitems from './Wishlistitems';
import image from '../icons/noitem.png'
const Wishlist = () => {
  const context=useContext(ProductContext);
  const {wishlist,fetch_user_Wishlist}=context;
  useEffect(() => {
    document.getElementById("searchbox").style.display="none";
    document.getElementById("mainart").style.display="none";
     fetch_user_Wishlist();
  },[])


  return (
   <div id="wishlistcontainer">
        <div className="header py-3 mt-3 px-2 d-flex align-items-end justify-content-center" >
            <h2><strong>Wishlist</strong></h2>
        </div>
        <div className="container-fluid p-3 pt-0">
            {(wishlist.length===0)? <div className='d-flex justify-content-center'><img src={image} style={{position:"absolute"}} alt=".." id='noitem' /></div>:
            wishlist.map((newwishlist)=>{
              return(


                <Wishlistitems key={newwishlist._id} value={newwishlist} />

                
              )
            })}
            
           
            
          
            
        </div>
        </div>
    

  )
}

export default Wishlist