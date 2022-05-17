import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
const Requestitems = (props) => {
  const [btnvalue, setbtnvalue] = useState("Sell");
  const [disabled, setdisabled] = useState(false);
  const handlesell=()=>{
      
       
       props.sellproduct(props.value._id);
       props.sendAlert(props.value._id);
       setbtnvalue("Sold");
       setdisabled(true);

  }
     
  return (
     <>
        <div className="buyitems d-flex ">
            <div className="part1  p-2 " style={{width:"30%",border:"0.1px solid #D3D3D3"}}>
                 <img src={props.value.image} alt="" />
            </div>
            <div className="part2  p-2 pb-0 d-flex-column justify-content-end align-items-end " style={{width:"300px",overflow:"hidden"}}>
                 <h6 className="mb-2 text-start"><strong>Title : </strong>{props.value.title}</h6>

                 <p className="mb-2 text-start"><strong>Category : </strong>{props.value.category}</p>
                 <p className="mb-2 text-start"><strong>price : </strong>{props.value.price}</p>
                 <p className="mb-2 text-start py-1" ><strong>Bid : </strong>{props.value.bid} Rs.</p>
                 <b ><span className="mb-2" style={{color:"green"}}>Payment request sent</span></b>
                 <div className="d-flex justify-content-start mt-2">
                 <Button type="button" className=" mb-2 me-2" variant="contained" onClick={handlesell} style={{width:"40%",backgroundColor:"#0eafed"}}>sold</Button>
                 <Button type="button" className=" mb-2" variant="outlined"  style={{width:"40%",borderColor:"#0eafed",color:'#0eafed'}}>unsold</Button>
                 {/* <button className=" mb-2 card_button"  disabled={disabled} onClick={()=>{handlesell()}} style={{width:"40%"}}>{btnvalue}</button> */}
                 </div>
                 <NavLink style={{display:"block"}}className="mb-2 text-start" to="/">See Details</NavLink>
                 
                 
                
            </div>
        </div>
        <hr />
        
     </> 
  )
}

export default Requestitems