import React, { useContext } from 'react'
import ProductContext from '../context/Productcontex'

const About = () => {
  const a=useContext(ProductContext)
  return (
    <div>{a.name}</div>
  )
}

export default About