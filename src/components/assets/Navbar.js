import React, { useState } from 'react'
import logo from '../icons/newlogo.png'
// import cross from '../icons/x-lg.svg'
// import ham from '../icons/list.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const navigate=useNavigate();
 const handlelogout=()=>{
   const a=window.confirm("Do you really want to Logout ?")
   if(a)
     {
       localStorage.clear();
       navigate("/welcome");
     }
     
 }
   
       
   
  

  return (
    <nav className="navbar navbar-expand-sm py-sm-1 sticky-top navbar-light" style={{backgroundColor:"white"}}>
      <div className="container-fluid d-flex align-items-center pe-2 py-1">
        <NavLink className="navbar-brand me-1 pt-0 pb-0 " to={localStorage.getItem('role')?"/Arthub":"/welcome"}>
          <img src={logo} alt="" height="35px " className='me-2' />
        </NavLink>
        <button id="b" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon ' style={{color:"black"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item ms-2">
              {localStorage.getItem('role') && <NavLink className="nav-link" aria-current="page" to="/Arthub"  style={{color:"black"}}>Home</NavLink>}
            </li>
            <li className="nav-item ms-2">
              <NavLink className="nav-link" to="/about" style={{color:"black"}}>About</NavLink>
            </li>
            <li className="nav-item dropdown ms-2">
             { localStorage.getItem('role') && <div className="nav-link dropdown-toggle"  style={{color:"black"}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </div>}
              {localStorage.getItem('role') === 'seller' &&
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/uploaditems">Upload Art</NavLink></li>
                  <li><NavLink className="dropdown-item" to="/buyrequest">Buy Request</NavLink></li>
                  <hr className="dropdown-divider" />
                  <li><NavLink className="dropdown-item" to="/sellinghistory">Selling History</NavLink></li>
                </ul>}

                {!localStorage.getItem('role') === 'buyer' &&<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><NavLink className="dropdown-item" to="/wishlist">My Wishlist</NavLink></li>
                  <hr className="dropdown-divider" />
                  <li><NavLink className="dropdown-item" to="/mystore">My store</NavLink></li>
                </ul>}
            </li>

          </ul>
          <form className="d-flex">
            
            {/* <NavLink className="navbar-brand me-2" to="/accountdetails">
              <img src="https://nettv4u.com/imagine/23-10-2019/hrithik-roshan.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title={localStorage.getItem('role')} alt="" id="profileimage" />
            </NavLink> */}
             <div className="form-check form-switch my-auto me-2 ms-1">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" title={"dark mode disabled"} />
            </div>
            {(localStorage.getItem('role'))?<div className="dropdown me-2">
              <button className="btn btn-white dropdown-toggle" style={{appearance:"none"}} type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
              <img src="https://nettv4u.com/imagine/23-10-2019/hrithik-roshan.jpg" data-bs-toggle="tooltip" data-bs-placement="top" title={localStorage.getItem('role')} alt="" id="profileimage" />
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">Details</button></li><hr style={{margin:"0"}}/>
                <li><button className="dropdown-item" type="button" onClick={handlelogout}>Logout</button></li>
                
              </ul>
            </div>: <NavLink to="/Login"><button className="button2 px-3" type="submit" id="loginbutton" style={{height:"44px"}}>Login</button></NavLink>}
            

          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar