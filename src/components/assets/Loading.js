import React, { useEffect } from 'react'
import loading from '../icons/loading.gif'
const Loading = () => {
  
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh",width:"100vw"}}>
        <img src={loading} alt="..." style={{height:"120px"}} />
        
    </div>
  )
}

export default Loading