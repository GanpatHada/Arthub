import React from 'react'
import { useEffect } from 'react';
import './mycart.css'
import icon from "./icons/trash.svg"
const Mycart = () => {
  useEffect(() => {
    document.getElementById("headerimage").style.display = "none";
  })


  return (
    <div className="content">
        <div className="lbox">
          <div className="heading d-flex justify-content-center ">

            <h3>Shopping Cart</h3>
            
          </div>
          <div className="items bg-white d-flex jutify-content-between p-2">
            <div className="image bg-white d-flex justify-content-center">
              <img src="https://www.thesprucecrafts.com/thmb/ejAVyiv9eQrXyVnt0N5o4lScrIk=/4096x2848/filters:fill(auto,1)/paint-brushes-in-a-row-153773444-b0d3a3067cbf4e81a534a214a61bf8e0.jpg" alt="" />
            </div>
            <div className="description bg-white d-flex-column justify-content-top p-4">
              <h3><strong>this is name</strong></h3>
              <p>loribus! m hic cumque possimus consequatur doloribus laudantium officia modi deserunt?</p>
            </div>
            <div className="price d-flex bg-white justify-content-end align-items-center" id="realprice">
              <img id="trashlogo" src={icon} alt="" />
              <p >56556</p>
            </div>
          </div>
          {/* nextitems */}
          <div className="items bg-white d-flex jutify-content-between p-2">
            <div className="image bg-white d-flex justify-content-center">
              <img src="https://www.thesprucecrafts.com/thmb/ejAVyiv9eQrXyVnt0N5o4lScrIk=/4096x2848/filters:fill(auto,1)/paint-brushes-in-a-row-153773444-b0d3a3067cbf4e81a534a214a61bf8e0.jpg" alt="" />
            </div>
            <div className="description bg-white d-flex-column justify-content-top p-4">
              <h3><strong>this is name</strong></h3>
              <p>loribus! m hic cumque possimus consequatur doloribus laudantium officia modi deserunt?</p>
            </div>
            <div className="price d-flex bg-white justify-content-end align-items-center" id="realprice">
              <img id="trashlogo" src={icon} alt="" />
              <p >56556</p>
            </div>
          </div>
          {/* nextitems */}




          {/* nextitems */}
         
        {/* nextitems */}







      </div>
      <div className="rbox">
        <div className="ruheading text-center">
          <h3>Summary</h3>
        </div>
        <div className="rubox d-flex justify-content-center align-items-center">
          <p>Total no. of items : <b>4</b></p>
          <p>Total amount to be paid : <b>400</b></p>
          <button className="btn btn-primary justify-self-bottom paybtn">proceed to Buy</button>
        </div>
      </div>
    </div>

  )
}

export default Mycart