import React from 'react'
import { useEffect, } from 'react'
import { storage } from '../Firebase'
import logo from '../icons/no_image.jpg'
import { useState } from 'react'
import Spinner from '../Spinner'
import { useNavigate } from 'react-router-dom'
import wordConverter from '../assets/WordConverter'
import Button from '@mui/material/Button';
const Sellitem = () => {
    let navigate = useNavigate();
    const [word, setword] = useState("zero rupee")
    const [status, setstatus] = useState(logo);
    const [spstatus, setspstatus] = useState(false);
    const [progress, setprogress] = useState(0)

    function imageUpload(e) {
        let selected = e.target.files[0];
        const storageRef = storage.ref(selected.name);
        storageRef.put(selected).on(
            "state.changed",
            (snap) => {
                setspstatus(true)
                let percenatge = (snap.bytesTransferred / snap.totalBytes) * 100;
                setprogress(Math.ceil(percenatge))
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
            const select = document.getElementById("category");
            const category = select.options[select.selectedIndex].text;
            const price = document.getElementById("pprice").value;
            if (price < 1)
                return alert("Enter valid price")
            const response = await fetch("http://localhost:8000/api/product/uploadproduct", {
                method: 'POST',
                headers: {
                    'Content-type': "application/json",
                    'auth-token': localStorage.getItem('token')
                },
                body: JSON.stringify({ image: status, title: title, description: description, category: category, price: price })
            });
            const json = await response.json();
            if (!json.success) {
                console.log(json.message);
                alert("sorry! something error has been occured");
            }
            else {

                alert("uploaded successfuly")
                console.log(json.message)

            }
        }
    }
    return (
        <div className="container my-4 d-flex-column ">
            <div id="uploadheading" className='p-3 d-flex align-items-center sellitem'>
                <h4><strong style={{ color: "#0eafed" }}>Upload your ArtWork</strong></h4>
            </div>
            <form onSubmit={handleSubmit}>
                <div id="maincontainer" className='sellitem'>

                    <div id="rcontainer">
                        <div style={{ textAlign: "center" }} className="mt-4 mb-3">
                            <h3> Product details</h3>
                        </div>
                        <div className='p-4'>


                            <div className="mb-3">

                                <input
                                    type="text"
                                    className=" form-control form-control-sm"
                                    id="title"
                                    placeholder='Enter title'
                                    maxLength="20"
                                    required />

                            </div>
                            <div className="mb-3">

                                <textarea
                                    className=" form-control form-control-sm"
                                    id="description"
                                    placeholder='Enter short description'
                                    rows="4"
                                    style={{ resize: "none" }}
                                    required>
                                </textarea>
                            </div>
                            <div className="mb-3">

                                <select className="form-select form-select-sm" aria-label="Default select example" id="category">
                                    <option autoselected="true" value="0">Digital painting</option>
                                    <option value="1">Oil painting</option>
                                    <option value="2">Acrylic painting</option>
                                    <option value="3">pastel Drawing</option>
                                    <option value="4">poster </option>
                                </select>
                            </div>

                            <div className="mb-2">

                                <input type="number"
                                    className="form-control form-control-sm"
                                    id="pprice"
                                    placeholder='Enter ammount'
                                    required
                                    onChange={(e) => { setword(wordConverter(e.target.value)) }} />
                            </div>
                            <i className="mb-2" style={{ fontSize: "14px" }}>{word}</i>




                        </div>
                    </div>
                    <div className='mb-3 p-4 d-flex justify-content-center'>
                        <input type="file" accept="image/*" onChange={imageUpload} id="myfile" />
                    </div>
                    <div id="lcontainer">
                        <div className="uploadimage d-flex justify-content-center align-items-center">
                            {spstatus === false && <img src={status} alt="..." id="myimage" />}
                            {spstatus === true && <Spinner progress={progress} />}
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mb-4">

                        <Button type="submit" className="mb-2 mt-4" variant="contained" style={{ width: "30%", height: "40px", backgroundColor: "#0eafed" }}>Upload</Button>
                        <Button type="button" className="mb-2 mt-4 ms-2" variant="outlined" onClick={() => { navigate('/Arthub') }} style={{ color: "#0eafed", width: "30%", height: "40px", borderColor: "#0eafed" }}>Cancel</Button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default Sellitem