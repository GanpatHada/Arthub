import React from 'react'
import { useEffect, } from 'react'
import { storage } from '../Firebase'
import logo from '../icons/no_image.jpg'
import nlogo from '../icons/newlogo.png'
import { useState } from 'react'
import Spinner from '../Spinner'
import { useNavigate } from 'react-router-dom'
import wordConverter from '../assets/WordConverter'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Sellitem.css'

const Sellitem = () => {
    useEffect(() => {
        document.getElementById("searchbox").style.display = "none";
        document.getElementById("mainart").style.display = "none";
    }, [])
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
        <div className="container mb-4 d-flex-column ">
            <div className=" d-flex justify-content-center align-items-center" id="sellitemheader" >
                <h2><strong>Sell ArtWork</strong></h2>
            </div>
            <form id="uploadform" onSubmit={handleSubmit}>
                <div id="sellcontainer" className='sellitem'>

                    <div id="rcontainer">
                        <div className="mt-4 mb-3 px-3 d-flex justify-content-between">
                            <h3 id="pd"> Product details</h3>
                            <img src={nlogo} alt="" height="50px" />
                        </div><hr />
                        <div className='p-3'>


                            <div className="mb-3">

                                <input
                                    type="text"
                                    className=" form-control form-control"
                                    id="title"
                                    placeholder='Enter title'
                                    maxLength="20"
                                    required />


                            </div>
                            <div className="mb-3">

                                <textarea
                                    className=" form-control form-control"
                                    id="description"
                                    placeholder='Enter short description'
                                    rows="4"
                                    style={{ resize: "none" }}
                                    required>
                                </textarea>
                            </div>
                            <div className="mb-3">

                                <select className="form-select form-select" aria-label="Default select example" id="category">
                                    <option autoselected="true" value="0">Digital painting</option>
                                    <option value="1">Oil painting</option>
                                    <option value="2">Acrylic painting</option>
                                    <option value="3">pastel Drawing</option>
                                    <option value="4">poster </option>
                                </select>
                            </div>

                            <div className="mb-2">

                                <input type="number"
                                    className="form-control form-control"
                                    id="pprice"
                                    placeholder='Enter amount'
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
                    <div id="sellbtns" className="mb-4">

                        <Button type="submit" id="uploadbtn" variant="contained">Upload</Button>
                        <Button type="button" id="cancelbtn" variant="contained" onClick={() => { navigate('/Arthub') }}>Cancel</Button>
                    </div>

                </div>
            </form>

        </div>
    )
}

export default Sellitem