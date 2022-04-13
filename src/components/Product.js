import React from 'react'
import Footer from './assets/Footer'
// import Serach from './assets/Serach'
import Content from './Content'
import { useEffect } from 'react'
const Product = () => {
  useEffect(() => {
    document.getElementById("headerimage").style.display="block";
  })
    
  return (
    <div>
          {/* <Serach /> */}
          <Content />
          <Footer />
    </div>
  )
}

export default Product