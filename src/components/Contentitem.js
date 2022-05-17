import React  from 'react'
import ProductContext from '../context/Productcontex'
import { useContext,useState } from 'react'
import Button from '@mui/material/Button';
const Contentitem = (props) => {
  const [bid, setbid] = useState(null)
  const context = useContext(ProductContext);
  const{showBidHistory}=context;
  const makeBid =(e)=>{
        e.preventDefault();
        if(localStorage.getItem('role')!=="buyer")
           {
             return alert("Please login with Buyer account");
           }         
        props.createBid(props.value._id,bid);
  }
  const handlechange=(e)=>{
        setbid(e.target.value);
  }
  const handleProductDetails=()=>{
    props.handleDetails(props.value._id);
  }
  return (
  <div className="card mb-1 mt-4 p-3" id="card" style={{zIndex:"4"}}>
  <img className="card-img-top p-1" style={{width:"100%",objectFit:"contain"}} src={props.value.image} alt="Card image cap" id="content_Card"/>
  <div className="card-body p-0" style={{overflow:"hidden"}}>
    <p className="card-text text-center mt-1 py-1" style={{whiteSpace:"nowrap"}}><strong>Bid : </strong>{props.value.bid} /-</p>
    <form className="d-flex-column "onSubmit={makeBid}>
     
      <div className="d-flex justify-content-between mt-4 mb-3">

      <input type="number" required placeholder='Enter bid Amount' autoFocus={false} className="form-control card_input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="bid"
       onChange={handlechange}
       style={{width:"55%",boxShadow:"none",height:"40px"}}
       />
        <Button type="submit" variant="contained" style={{width:"40%",backgroundColor:"#0eafed"}}>Bid</Button>
      </div>
     <div className="d-flex justify-content-between">
     <p className="d-flex justify-content-center" onClick={handleProductDetails} style={{cursor:"pointer",color:"#0eafed"}}><b>see details</b></p>
     <p className='me-1' style={{cursor:"pointer",color:"#0eafed",textDecoration:"underline"}} onClick={()=>{showBidHistory(props.value._id)}}>bid history</p>
     </div>
    </form>
  </div>
</div>
  )
}

export default Contentitem