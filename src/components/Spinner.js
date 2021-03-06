import React from 'react'

const Spinner = (props) => {
    return (
        <>
        <div className="spinner-border" style={{color:"var(--maincolor)",width:"50px",height:"50px"}} id='myspinner' role="status">
            <span class="sr-only">Loading...</span>
           
        </div>
         <div style={{position:"absolute",margin:"auto",color:"var(--maincolor)"}}>{props.progress}</div>
         </>
        
        
    )
}

export default Spinner