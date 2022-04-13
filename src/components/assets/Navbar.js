import React from 'react'
import logo from '../icons/newlogo.png'
import logo1 from '../icons/cart4.svg'
import { NavLink } from 'react-router-dom'
import Login from '../Login'
const Navbar = () => {
  const handleLogout=()=>{
    
  }
  
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light" style={{ position: "sticky", top: "0px" }}>
      <div className="container-fluid">
        <a className="navbar-brand pt-0 pb-0 mb-1" href="#">
          <img src={logo} alt="" height="35px" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse navcol" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>


          <form className="d-flex align-items-center ms-auto">
        
              <a className="nav-link text-dark" aria-current="page" href="/"></a>
            
             <NavLink to="/mycart"><img src={logo1} alt="..." height="30px" className='me-2' /></NavLink>
            <NavLink to="/Login"><button className="btn btn-info" type="button">Log in</button></NavLink>
             
          </form>
        </div>
      </div>


    </nav>
  )
}

export default Navbar