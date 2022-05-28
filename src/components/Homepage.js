import React, { useState } from 'react'
import Navbar from './assets/Navbar';

import Product from './Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Login from './Login';
import Sellercreateaccount from './seller/Sellercreateaccount';
import Sellitem from './seller/Sellitem';
import Sellinghistory from './seller/Sellinghistory';
import Accountdetails from './Accountdetails';
import Buyrequest from './seller/Buyrequest';
import ProductState from '../context/ProductState';
import Wishlist from './buyer/Wishlist'
import Mystore from './buyer/Mystore';
import Loading from './assets/Loading';
import PageNotFound from './assets/PageNotFound';
import InternalServerError from './assets/InternalServerError';
import ProductDetails from './ProductDetails';
import Welcome from './Welcome';
import BidHistory from './BidHistory';
import Invoice from './assets/Invoice';
import Navbar2 from './assets/Navbar2';
import Footer from './assets/Footer';
import Mainart from './assets/Mainart';
import Searchbox from './assets/Searchbox';
import Paymentfailad from './assets/Paymentfailad';
const Homepage = () => {
  return (
    <>
    <BrowserRouter>
    <ProductState>
    {/* <Navbar/> */}
    <Navbar2/>
    <Mainart/>
    <Searchbox/>
    <Routes>
      <Route exact path="/" element={<Product/>}/>
      <Route exact path="/productdetails" element={<ProductDetails/>}/>        
      <Route exact path="/bidhistory" element={<BidHistory/>}/>        
      <Route exact path="/Welcome" element={<Welcome/>}/>
      <Route exact path="/about" element={<Invoice/>}/>
      <Route exact path="/invoice" element={<Invoice/>}/>
      <Route exact path="/accountdetails" element={<Accountdetails/>}/>
      <Route exact path="/uploaditems" element={<Sellitem/>}/>
      <Route exact path="/sellinghistory" element={<Sellinghistory/>}/>
      <Route exact path="/buyrequest" element={<Buyrequest/>}/>
      <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="createaccount" element={<Sellercreateaccount/>}></Route>
      <Route exact path="/wishlist" element={<Wishlist/>}/>  
      <Route exact path="/mystore" element={<Mystore/>}/>  
      <Route exact path="/mystoree" element={<Loading/>}/>  
      <Route exact path="/servererror" element={<InternalServerError/>}/>  
      <Route exact path="/paymentfailed" element={<Paymentfailad/>}/>  
      <Route exact path="*" element={<PageNotFound/>} />
    </Routes>
    <Footer/>
    </ProductState>
    </BrowserRouter>
    </>
  )
}

export default Homepage