import React, {useContext} from 'react'
import ProductContext from '../context/Productcontex'
const BidHistory = () => {
    
    const context = useContext(ProductContext);
    const {bidhistory}=context;
  return (
    <div className='container pb-1 productcard my-4' style={{backgroundColor:"white",marginTop:"30px",width:"90%",borderRadius:"5px",overflow:"auto"}}>
        <div className="historyheading d-flex justify-content-center align-items-center" style={{color:"#0eafed",height:"70px"}}>
           <h3 className='mb-0'> Bid-History </h3>
        </div>
        {
            bidhistory.map((newmap)=>{
                return(
                    <div key={newmap._id}>
                        <hr />
                    <div className='d-flex-column justify-content-between' >
                         <strong ><span style={{color:"#0eafed"}}>By : </span>&nbsp;&nbsp;{localStorage.getItem('id')===newmap.bname?"You":newmap.bname}</strong>
                         <h5 style={{color:"grey"}}><span style={{color:"#0eafed"}}>Rs : </span>{newmap.bamt}</h5>
                    </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default BidHistory