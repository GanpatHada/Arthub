import React, { useState } from 'react'
import Spinner from '../Spinner'

const Requestitems = (props) => {
  const [btnvalue, setbtnvalue] = useState("Sell");
  const handlesell=()=>{
       setbtnvalue("Sold");
  }
     
  return (
     <>
        <div className="buyitems d-flex ">
            <div className="part1  p-2 " style={{width:"40%",border:"2px solid #D3D3D3"}}>
                 <img src={props.value.image} alt="" />
            </div>
            <div className="part2  p-2 d-flex-column my-auto align-items-center " style={{width:"40%",overflow:"hidden"}}>
                 <h5 className="mb-2 text-start"><strong>{props.value.title}</strong></h5>

                 <p className="mb-2 text-start">{props.value.category}</p>
                 <p className="mb-2 text-start">{props.value.description}</p>
                 <p className="mb-2 text-start"><strong>{props.value.price}</strong> Rs.</p>
            </div>
            <div className="part3  p-2  d-flex justify-content-center align-items-center" style={{width:"20%"}}>
                 <button className="btn btn-dark" onClick={()=>{handlesell()}} style={{width:"100%"}}>{btnvalue}</button>
            </div>
        </div><hr id="hr"/>
        <hr />
        
     </> 
  )
}

export default Requestitems