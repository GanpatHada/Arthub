import React from 'react'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import './Mystore.css';
const Mystoreitems = (props) => {
  const { _id, image, title, price, sellerid, bid } = props.value;
  const handleDownload = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.jpg"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <div className="shi" id="mystore">
      <div className="card d-flex-column pb-4">
        <div id="mystoreimage" className="p-1">
          <img className="card-img-top" src={image} alt="Card image cap" />
        </div>
        <div className="card-body mt-1 p-0">



          <div className="d-flex-column ps-2">
            <div className="d-flex justify-content-between">
              <div>
                <span className=''><strong> Title : </strong>{title}</span><br />
                <span className=''><strong> price : </strong>{bid} rs.</span><br />
                <span className=''><strong> Base price : </strong>{price} rs.</span>
              </div>
              <div className="me-2">
                <a href="">see details</a>
              </div>
            </div>
            <div id="downloadsection" className="mt-3">
              <a href={image} onClick={(e) => { handleDownload(e) }} ><Button variant="contained" id="downloadbtn" endIcon={<DownloadIcon id="downloadicon" />} >
                Download
              </Button></a>
              <Button variant="contained" id="invoicebtn" endIcon={<DownloadIcon id="downloadicon" />} >
                Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mystoreitems