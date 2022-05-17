import React from 'react'
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
const Mystoreitems = (props) => {
    const { _id, image, title, price, sellerid, bid } = props.value;
    const handleDownload=(e)=>{
        console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {
        response.arrayBuffer().then(function(buffer) {
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
        <div className="shi">
            <div className="card d-flex-column pb-4">
                <div className="bg-light p-1" style={{ width: "100%", height: "50%" }}>
                    <img className="card-img-top" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={image} alt="Card image cap" />
                </div>
                <div className="card-body mt-1 p-0" style={{ minHeight: "60%", fontSize: "1vw" }}>



                    <div className="d-flex-column ps-2">
                        <p className=''><strong> Title : </strong>{title}</p>
                        <p className=''><strong> price : </strong>{bid}</p>
                        <p className=''><strong> Product id : </strong><span style={{ color: "#0eafed" }}>{_id}</span></p>
                        <p className=''><strong>Original Price : </strong>{price}/-</p>
                        <p className=''><strong>Seller id : </strong>{sellerid}</p>
                        <a href={image} onClick={(e)=>{handleDownload(e)}} ><Button variant="contained" id="downloadbtn"  endIcon={<DownloadIcon id="downloadicon" />} style={{backgroundColor:"#0eafed"}} >
                            Download
                        </Button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mystoreitems