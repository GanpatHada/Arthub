import React, { useEffect } from 'react'
import loading from '../icons/loader2.gif'
const Loading = () => {
  
  
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"100vh",width:"100%"}}>
        <img src={loading} alt="..." style={{height:"120px"}} />
    </div>
  )
}

export default Loading