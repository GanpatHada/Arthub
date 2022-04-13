import React from 'react'

const Contentitem = () => {
  return (
  <div className="card mb-4 mt-4 p-4" style={{zIndex:"4"}}>
  <img className="card-img-top" style={{width:"100%",height:"250px",objectFit:"contain"}} src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
  <div className="card-body p-0">
    <p className="card-text text-center">500/-</p>
    <div className="d-flex-column ">
      <input type="number" placeholder='Enter bid Amount' autoFocus={false} className="form-control text-center" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
      <button className="btn btn-primary mt-2" type='submit' style={{width:"100%"}}>Bid Now</button>
    </div>
  </div>
</div>
  )
}

export default Contentitem