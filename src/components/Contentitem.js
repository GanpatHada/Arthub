import React from 'react'

const Contentitem = () => {
  return (
  <div className="card mb-4 mt-4 p-4" style={{zIndex:"4"}}>
  <img className="card-img-top" style={{width:"100%",height:"300px",objectFit:"contain"}} src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  )
}

export default Contentitem