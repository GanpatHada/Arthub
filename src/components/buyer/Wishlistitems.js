import React, { useEffect } from 'react'
const Wishlistitems = (props) => {
  
  return (
    <div>
        <div className="buyitems d-flex ">
            <div className="part1  p-2 " style={{width:"30%",border:"0.1px solid #D3D3D3"}}>
                 <img src={props.value.image} alt="" />
            </div>
            <div className="part2  p-2 d-flex-column my-auto align-items-center " style={{width:"300px",overflow:"hidden"}}>
                 <h6 className="mb-2 text-start"><strong>Title : </strong>{props.value.title}</h6>

                 <p className="mb-2 text-start"><strong>Category : </strong>{props.value.category}</p>
                 <p className="mb-2 text-start" ><strong>Description : </strong>{props.value.description}</p>
                 <p className="mb-2 text-start"><strong>Bid : </strong>{props.value.bid}</p>
                 <p className="mb-2 text-start py-1 text-center" style={{border:"1px solid rgba(0,0,0,.323)"}}><strong>status : </strong><span style={{color:'green'}}>Request sent...</span></p>
                 <button className="btn" disabled={true} style={{width:"100%",backgroundColor:"skyblue"}}>Make payment</button>
            </div>
        </div>
        <hr />
        
     
    </div>
  )
}

export default Wishlistitems