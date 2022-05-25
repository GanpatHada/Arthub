import React from 'react'
import ProductContext from '../context/Productcontex'
import { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import './Contentitems.css'
const Contentitem = (props) => {
  const [bid, setbid] = useState(null)
  const context = useContext(ProductContext);
  const { showBidHistory } = context;
  const makeBid = (e) => {
    e.preventDefault();
    if (localStorage.getItem('role') !== "buyer") {
      return alert("Please login with Buyer account");
    }
    props.createBid(props.value._id, bid);
  }
  const handlechange = (e) => {
    setbid(e.target.value);
  }
  const handleProductDetails = () => {
    props.handleDetails(props.value._id);
  }
  return (
    <div className="card mb-1 mt-4" id="contentcard" style={{ zIndex: "4" }}>
      <section id="imagesection" className="p-1">
        <img className="card-img-top " src={props.value.image} alt="Card image cap" id="content_Card" />
      </section>
      <section id="bodysection" className="card-body" style={{ overflow: "hidden" }}>
        <div id="pricesection"><p className="card-text text-center" style={{ whiteSpace: "nowrap" }}>
          <strong>Bid : </strong>{props.value.bid} /-</p>
        </div>
        <div id="bidsection">
          <form className="bidform" onSubmit={makeBid}>

            <input type="number" required placeholder='Enter bid Amount' autoFocus={false} className="form-control card_input" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" id="bid"
              onChange={handlechange}
            />
            <Button type="submit" variant="contained" id="bidbtn">Bid</Button>

          </form>
          </div>
          <div id="bidfooter">
            <p onClick={handleProductDetails}>see details</p>
            {/* <span style={{ cursor: "pointer", color: "#0eafed", textDecoration: "underline" }} onClick={() => { showBidHistory(props.value._id) }}>bid history</span> */}
          </div>
      </section >
    </div >
  )
}

export default Contentitem