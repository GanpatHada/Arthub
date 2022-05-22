import React, { useEffect } from 'react'
// import Serach from './assets/Serach'
import Content from './Content'
const Product = () => {
useEffect(() => {
  document.getElementById("searchbox").style.display="flex";
  document.getElementById("mainart").style.display="flex";
  document.getElementById("mainnavbar").style.display="flex"}, [])

    
  return (
    <div>
          {/* <Serach /> */}
          <Content />
          
    </div>
  )
}

export default Product