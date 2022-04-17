import React, { useState } from 'react'
import Spinner from '../Spinner'

const Requestitems = (props) => {
  const [btnvalue, setbtnvalue] = useState("Sell");
  const [disabled, setdisabled] = useState(false);
  const handlesell=()=>{
       props.sellproduct(props.value._id);
       setbtnvalue("Sold");
       setdisabled(true);

  }
     
  return (
     <>
        <div className="buyitems d-flex ">
            <div className="part1  p-2 " style={{width:"30%",border:"0.1px solid #D3D3D3"}}>
                 <img src={props.value.image} alt="" />
            </div>
            <div className="part2  p-2 d-flex-column my-auto align-items-center " style={{width:"300px",overflow:"hidden"}}>
                 <h6 className="mb-2 text-start"><strong>Title : </strong>{props.value.title}</h6>

                 <p className="mb-2 text-start"><strong>Category : </strong>{props.value.category}</p>
                 <p className="mb-2 text-start" ><strong>Description : </strong>{props.value.description}</p>
                 <p className="mb-2 text-start"><strong>price : </strong>{props.value.price}</p>
                 <p className="mb-2 text-start py-1 text-center" style={{border:"1px solid rgba(0,0,0,.323)"}}><strong>Bid : </strong>{props.value.price} Rs. <strong> &nbsp;from : </strong>Ganpat Hada</p>
                 <button className="btn"  disabled={disabled} onClick={()=>{handlesell()}} style={{width:"100%",backgroundColor:"skyblue"}}>{btnvalue}</button>
            </div>
        </div>
        <hr />
        
     </> 
  )
}

export default Requestitems