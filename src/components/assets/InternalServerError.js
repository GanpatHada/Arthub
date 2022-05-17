import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
const InternalServerError = () => {
  return (
   <div>
         <h2 className='text-center mt-4 text-black'>Error : <strong style={{color:"red"}}>500</strong></h2>
         <h5 className='text-center mt-3 text-dark'>Sorry: Internal server error</h5>
         <h6 className='text-center mt-4 text-dark'><NavLink className=' mx-auto mt-3 text-primary' to="/Arthub">go to homepage</NavLink></h6>
   </div>
  )
}

export default InternalServerError