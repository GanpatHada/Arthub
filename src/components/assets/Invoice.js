import React, { useEffect } from 'react'
import './Invoice.css'
import logo from '../icons/newlogo.png'
import Button from '@mui/material/Button';
const Invoice = () => {
    
    useEffect(() => {
        document.getElementById("searchbox").style.display="none";
        document.getElementById("mainart").style.display="none";
      }, [])
    const handleprint=()=>{
        window.print();
    }
    return (
        <>
        <div className="paymentcontainer margin50">
            <header className="header">
                <div className="paymentlogo">
                    <img src={logo} alt=".." height="50px" />
                </div>
                <div className="invoice my-auto" style={{ textAlign: "right" }}>
                    <h3><strong>INVOICE</strong></h3>
                    <div><strong>Order id : </strong><span>7478745</span></div>
                    <strong>Payment id : </strong><span>7478745</span>
                </div>

            </header>
            <hr />
            <div className="d-flex justify-content-between">
                <div id="lblock">
                    <h5><strong>Invoiced To :</strong></h5>
                    <p>falana singh</p>
                    <p>falana singh</p>
                    <p>falana singh</p>
                    <br /><br />
                    <b><div>Payment</div></b>
                    <p>success</p>
                </div>
                <div id="rblock" style={{ textAlign:"right" }}>
                    <h5><strong>Seller info :-</strong></h5>
                    <p>falana singh chaudhary</p>
                    <p>falana singh</p>
                    <p>falana singh</p>
                    <br /><br />
                    <b><div>Date and Time</div></b>
                    <p>7478745</p>
                </div>

            </div>
            <div id="productheading" className='mt-3'>
              <div> <span style={{textAlign:"right"}}> <strong>Product id : </strong>754654511516161</span></div>
            </div>
            <div className='d-flex justify-content-between my-3'>
               <p><span>Name</span></p> 
               <p><span>Category</span></p> 
               <p><span>Price</span></p> 
            </div>
            <footer id="invoicefooter" className='text-center py-3' >
               <div> <span>© 2022 | All rights reserved | by <span>Ganpat Hada</span> </span></div>
               <span>7847845784 , xyz@gmail.com</span>
            </footer>
            <div className="d-flex justify-content-center mt-4">
        <Button type="button" className=" mb-2 me-2" id="print" variant="contained" onClick={handleprint} style={{width:"40px"}}>Print</Button>
         {/* <Button type="button" className=" mb-2" variant="outlined"  style={{width:"40px",borderColor:"#0eafed",color:'#0eafed'}}>unsold</Button> */}
        </div>
        </div>
       
         </>
    )
}

export default Invoice