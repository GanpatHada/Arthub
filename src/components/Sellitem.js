import React from 'react'
import { useEffect } from 'react'
import { storage } from './Firebase'
import logo from './icons/no_image.jpg'
import { useState } from 'react'
import Spinner from './Spinner'
const Sellitem = () => {
    const [status, setstatus] = useState(logo);
    const [spstatus, setspstatus] = useState(false);
    useEffect(() => {
        document.getElementById("headerimage").style.display = "none";
    })
    function imageUpload(e) {
        let selected = e.target.files[0];
        console.log(selected)
        const storageRef = storage.ref(selected.name);
        storageRef.put(selected).on(
            "state.changed",
            (snap) => {
                setspstatus(true)
                let percenatge = (snap.bytesTransferred / snap.totalBytes) * 100;
                console.log(percenatge);
            },
            (err) => {
                console.log(err);
            },
            async () => {
                const url = await storageRef.getDownloadURL();
                console.log(url);
                setstatus(url);
                setspstatus(false)


            }
        );
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!document.getElementById("myfile").value)
            alert("please select file")
        else {
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const category = document.getElementById("category").value;
            const price = document.getElementById("pprice").value;
            const response = await fetch("http://localhost:8000/api/product/uploadproduct", {
                method: 'POST',
                headers: {
                    'Content-type': "application/json",
                    'auth-token':localStorage.getItem('token')
                },
                body: JSON.stringify({ image: status, title: title, description: description, category: category,price:price })
            });
            const json = await response.json();
            if (!json.success) {
                console.log(json.message);
                alert("sorry! something error has been occured");
            }
            else{
                
                    alert("uploaded successfuly")
                    console.log(json.message)
                
            }
        }
    }
    return (
        <div className="outercontainer d-flex-column">
            <div id="uploadheading" className='p-3 d-flex align-items-center'>
                <strong>Upload your ArtWork</strong>
            </div>
            <div id="maincontainer">
                <div id="lcontainer">
                    <div className="uploadimage d-flex justify-content-center align-items-center">
                        {spstatus === false && <img src={status} alt="..." id="myimage" />}
                        {spstatus === true && <Spinner />}
                    </div>
                    <div className="uploadbutton d-flex justify-content-center align-items-center">
                        <form className='d-flex-column'>
                            <div className='text-center'>
                                <input type="file" accept=".png, .jpg, .jpeg .svg" style={{ width: "100%" }} onChange={imageUpload} id="myfile" />
                            </div>
                        </form>
                    </div>
                </div>
                <div id="rcontainer">
                    <div style={{ textAlign: "center" }} className="mt-4 mb-3">
                        <h3> product details</h3>
                    </div>
                    <form className='p-4' onSubmit={handleSubmit}>
                        <div className="mb-3">

                            <input
                                type="text"
                                className=" form-control form-control-sm"
                                id="title"
                                placeholder='Enter title'
                                required />

                        </div>
                        <div className="mb-3">

                            <input type="text"
                                className=" form-control form-control-sm"
                                id="description"
                                placeholder='Enter description'
                                required />
                        </div>
                        <div className="mb-3">

                            <select className="form-select form-select-sm" aria-label="Default select example" id="category">
                                <option autoselected="true">oil painting</option>
                                <option value="1">Acrylic painting</option>
                                <option value="2">pastel painting</option>
                                <option value="3">poster painting</option>
                            </select>
                        </div>

                        <div className="mb-2">

                            <input type="number"
                                className="form-control form-control-sm"
                                id="pprice"
                                placeholder='Enter ammount'
                                required />
                        </div>
                        <div className="d-flex justify-content-center">

                            <button type="submit" className="btn btn-primary" style={{ width: "60%", marginTop: "30px" }}>Upload</button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default Sellitem