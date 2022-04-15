import React from 'react'
import logo from '../icons/newlogo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light p-2" style={{ position: "sticky", top: "0px" }}>
      <div className="container-fluid pe-1">
        <NavLink className="navbar-brand pt-0 pb-0 mb-1" to="/">
          <img src={logo} alt="" height="35px" />
        </NavLink>
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
            <li className="nav-item dropdown">
              <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Account
              </div>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item" to="/uploaditems">Upload Art</NavLink></li>
                <li><NavLink className="dropdown-item" to="/buyrequest">Buy Request</NavLink></li>
                <hr className="dropdown-divider" />
                <li><NavLink className="dropdown-item" to="/sellinghistory">Selling History</NavLink></li>
              </ul>
            </li>
          </ul>


          <form className="d-flex align-items-center ms-auto">
            <NavLink className="navbar-brand" to="/accountdetails">
              <img src="https://nettv4u.com/imagine/23-10-2019/hrithik-roshan.jpg" alt="" id="profileimage"/>
            </NavLink>
            {/* <NavLink to="/mycart"><img src={logo1} alt="..." height="30px" className='me-2' /></NavLink> */}
            <NavLink to="/Login"><button className="btn btn-info me-0" type="button">Log in</button></NavLink>

          </form>
        </div>
      </div>


    </nav>
  )
}

export default Navbar