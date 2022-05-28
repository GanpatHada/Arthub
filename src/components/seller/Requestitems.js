import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const Requestitems = (props) => {
//   const [btnvalue, setbtnvalue] = useState("Sell");
//   const [disabled, setdisabled] = useState(false);
   
  return (
     <>
        <div className="buyitems d-flex ">
            <div className="part1  p-2 " style={{width:"400px"}}>
                 <img src={props.value.image} alt="" />
            </div>
            <div className="part2  p-2 pb-0 d-flex-column justify-content-end align-items-end " style={{width:"300px",overflow:"hidden"}}>
                 <h6 className="mb-2 text-start"><strong>Title : </strong>{props.value.title}</h6>
                 <p className="mb-2 text-start"><strong>price : </strong>{props.value.price}</p>
                 <p className="mb-2 text-start py-1" ><strong>Bid : </strong>{props.value.bid} Rs.</p>
                 <b ><span className="mb-2">{props.value.approved?<span style={{color:"green"}}>{`Product has been approved on ${props.value.approvaldate}`}</span>:<span style={{color:"red"}}>Not approved</span>}</span></b>
                 <div className="d-flex justify-content-start mt-2">
                 <Button type="button" className=" mb-2 me-2 mybutton" style={{display:props.value.approved?"none":"block",width:"40%"}} variant="contained" onClick={()=>{props.handleapproval(props.value._id)}}>approve</Button>
                 {/* <button className=" mb-2 card_button"  disabled={disabled} onClick={()=>{handlesell()}} style={{width:"40%"}}>{btnvalue}</button> */}
                 </div>
                 <a style={{display:"block",cursor:"pointer"}} onClick={()=>{props.productDetails(props.value._id)}} className="mb-2 text-start">See Details</a>
                 
                 
                
            </div>
        </div>
        <hr />
        
     </> 
  )
}

export default Requestitems