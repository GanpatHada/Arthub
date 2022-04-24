import React from 'react'
import { Link } from 'react-router-dom'
const PageNotFound = () => {
   
  return (
   <div>
         <h2 className='text-center mt-4 text-black'>Error : <strong style={{color:"red"}}>404</strong></h2>
         <h5 className='text-center mt-3 text-dark'>Sorry: page not found</h5>
         <h6 className='text-center mt-4 text-dark'><Link className=' mx-auto mt-3 text-primary' to="/Arthub">go to homepage</Link></h6>
   </div>
  )
}

export default PageNotFound