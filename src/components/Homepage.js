import React from 'react'
import Header from './assets/Header';
import Navbar from './assets/Navbar';
import Product from './Product';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './About';
import Login from './Login';
import Sellercreateaccount from './seller/Sellercreateaccount';
import Mycart from './buyer/Mycart';
import Sellitem from './seller/Sellitem';
import Sellinghistory from './seller/Sellinghistory';
import Accountdetails from './Accountdetails';
import Buyrequest from './seller/Buyrequest';
import ProductState from '../context/ProductState';
const Homepage = () => {
  return (
    <>
    <ProductState>
    <HashRouter>
    <Header/>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Product/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/accountdetails" element={<Accountdetails/>}/>
      <Route exact path="/uploaditems" element={<Sellitem/>}/>
      <Route exact path="/sellinghistory" element={<Sellinghistory/>}/>
      <Route exact path="/buyrequest" element={<Buyrequest/>}/>
      <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="createaccount" element={<Sellercreateaccount/>}></Route>
      <Route exact path="/mycart" element={<Mycart/>}/>  
    </Routes>
    </HashRouter>
    </ProductState>
    </>
  )
}

export default Homepage