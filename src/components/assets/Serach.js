import React from 'react'
import logo from '../icons/search.svg'
const Serach = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" id="search" style={{ height: "300px",width:"100%"}}>
            <form className="d-flex align-items-center container">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <img src={logo} alt="..." style={{cursor:"pointer"}} height="20px"/>
            </form>
        </div>
    )
}

export default Serach