import React, { useEffect, useContext ,useState} from 'react'
import ProductContext from '../context/Productcontex'
import './ProductDetails.css'
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import CloseIcon from '@mui/icons-material/Close';
const ProductDetails = () => {
    const [sellerdetails, setsellerdetails] = useState({}) 
    const context = useContext(ProductContext);
    const { details,showBidHistory,bidhistory } = context;
    const { _id, image, title, description, price, sellerid, category, bid, status } = details;
    const handlefullscreen = ()=>{
        document.getElementById("fullimage").style.display="block"
        document.getElementById("fullimagecontent").style.display="block"
        document.getElementById("clicon").style.display="block"
    }
    const handleclose = ()=>{
        document.getElementById("fullimage").style.display="none"
        document.getElementById("fullimagecontent").style.display="none"
        document.getElementById("clicon").style.display="none"
    }
    const fetchsellerdetails=async(sellerid)=>{
        try{
        const response=await fetch(`http://localhost:8000/api/product/sellerdetails/${sellerid}`,{
            method:"GET"
        });
        const json=await response.json();
        if(json.success)
            setsellerdetails(json.sellerdetails);     
    } catch (error) {
        console.log(error);
    }
    }
    

    
    useEffect(() => {
                 document.getElementById("searchbox").style.display = "none";
                 document.getElementById("mainart").style.display = "none";
                 fetchsellerdetails(sellerid);
                 showBidHistory(_id);
        
    }, [])

    return (
        <>
            <div id="fullimage" style={{display:"none"}}>
                      <img src={image} alt="" id="fullimagecontent"  style={{display:"none"}} /> 
                      <CloseIcon id="clicon" style={{display:"none"}} onClick={handleclose}/>

                
                  
            </div>
            <div id="pdcontainerheading">
                <h2><center><b>ProductDetails</b> </center></h2>
            </div>
            <div id="pdcontainer">
                <div id="pdimgdel">
                    <div id="mainimage">
                        <img src={image} alt="..." />
                        <FullscreenIcon id="ficon" title="fullscreen" onClick={handlefullscreen} />
                    </div>
                    <div id="detailssection">
                        <h3>{title}</h3>
                        <p><strong>Product id : </strong>{_id}</p>
                        <p><strong>category : </strong>{category}</p>
                        <p><strong>Description : </strong>{description}</p>
                        <p><strong>Current Bid : </strong>{bid}</p>
                        <p><strong>Original Price : </strong>{price}</p>
                        {status==="sold"?<p style={{color:"red"}}><strong>{status}</strong></p>:<p style={{color:"green"}}><strong>{status}</strong></p>}
                        
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div id="sellerdetailsection">
                        <h3 className='mb-3'>Seller Details</h3>
                        <p><strong>name : {sellerdetails.name}</strong></p>
                        <p><strong>Sellerid : {sellerdetails._id}</strong></p>
                        <p><strong>email : {sellerdetails.phone}</strong></p>
                        <p><strong>Phone : {sellerdetails.email}</strong></p>
                    </div>
                </div>
                <div id="bidhistoryheading">
                    <center>Bid History</center>
                </div>
                <div id="bidhistorysection">
                {
                bidhistory.map((newmap)=>{
                return(
                    <div key={newmap._id}>
                    <div className='d-flex justify-content-between p-3' style={{borderBottom:"1px solid grey"}} >
                         <strong ><span style={{color:"var(--maincolor)"}}>By : </span>&nbsp;&nbsp;{localStorage.getItem('id')===newmap.bname?<span style={{color:"green"}}>You</span>:<span>{newmap.bname}</span>}</strong>
                         <h5 style={{color:"grey"}}><span style={{color:"var(--maincolor)"}}>Rs : </span>{newmap.bamt}</h5>
                        
                    </div>
                    </div>
                )
            })
        }
                
                </div>
            </div>

        </>
    )
}

export default ProductDetails