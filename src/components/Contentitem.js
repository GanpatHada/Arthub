import React  from 'react'
import ProductContext from '../context/Productcontex'
import { useContext,useState } from 'react'
const Contentitem = (props) => {
  const [bid, setbid] = useState(null)
  const context = useContext(ProductContext);
  const{createBid,showBidHistory}=context
  const makeBid=(e)=>{
        e.preventDefault();
        createBid(props.value._id,bid);
  }
  const handlechange=(e)=>{
        setbid(e.target.value);
  }
  const handleProductDetails=()=>{
    props.handleDetails(props.value._id);
  }
  return (
  <div className="card mb-4 mt-4 p-4" id="card" style={{zIndex:"4"}}>
  <img className="card-img-top" style={{width:"100%",objectFit:"contain"}} src={props.value.image} alt="Card image cap" id="content_Card"/>
  <div className="card-body p-0" style={{overflow:"hidden"}}>
    <p className="card-text text-center mt-1" style={{whiteSpace:"nowrap"}}><strong>Bid : </strong>{props.value.bid} /-</p>
    <form className="d-flex-column "onSubmit={makeBid}>
     
      <div className="d-flex justify-content-between mt-4">

      <input type="number" required placeholder='Enter bid Amount' autoFocus={false} className="form-control card_button card_input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="bid"
       onChange={handlechange}
       style={{width:"55%",boxShadow:"none"}}
       />
       <button className="mb-4 card_button"type='submit' style={{width:"40%",whiteSpace:"nowrap"}}>
            Bid Now
       </button>
      </div>
     <div className="d-flex justify-content-between">
     <p className="d-flex justify-content-center" onClick={handleProductDetails} style={{cursor:"pointer",color:"#0eafed"}}><b>Click here to see details</b></p>
     <i className='me-1' style={{cursor:"pointer"}} onClick={()=>{showBidHistory(props.value._id)}}><strong>bid history</strong></i>
     </div>
    </form>
  </div>
</div>
  )
}

export default Contentitem