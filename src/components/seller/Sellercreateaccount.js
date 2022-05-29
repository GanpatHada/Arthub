import React, { useEffect} from 'react'
import { useState } from 'react'
import './Sellercreateaccount.css'
import logo from "../icons/newlogo.png"
import { NavLink,useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Whitespinner from '../assets/Whitespinner';
const Sellercreateaccount = () => {
    const navigate=useNavigate();
    useEffect(() => {
        document.getElementById("searchbox").style.display="none";
        document.getElementById("mainart").style.display="none";
        document.getElementById("mainnavbar").style.display="none"}, [])
    const [buttontext, setbuttontext] = useState("Create Buyer Account");
    const [passwordtype, setpasswordtype] = useState("password");
    const [loading, setloading] = useState(false)
    const fun=()=>{
        if(document.getElementById("radio22").checked)
            setbuttontext("Create Seller Account")
        else
            setbuttontext("Create Buyer Account") 
    }
    const handleCheckChange=()=>{
        if(document.getElementById("check2").checked)
          setpasswordtype('text');
        else
          setpasswordtype('password');  
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const password = document.getElementById("password").value;
        const cpassword = document.getElementById("cpassword").value;
        if (password !== cpassword)
            return alert("password did not match");
        if(document.getElementById("radio11").checked) 
        {setloading(true)   
         const response = await fetch("http://localhost:8000/api/user/createuser", {
            method: 'POST',
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({ name: name, email: email, phone: phone, password: password,role:"buyer" })
        });
        const json = await response.json();
        if (!json.success)
        {    console.log(json.message);
             alert("sorry! something error has been occured");
        }
        else
            {
            setloading(false) ;   
            navigate('/login')
            }
        }
        if(document.getElementById("radio22").checked)
        {
            setloading(true)
            const response = await fetch("http://localhost:8000/api/seller/createseller", {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({ name: name, email: email, phone: phone, password: password,role:"seller" })
            });
            const json = await response.json();
            if (!json.success)
                {console.log(json.message);
                    alert("sorry! something error has been occured");
                }
            else
                {
                    setloading(false);
                    navigate('/login')

                }  
        }
}
    return (
        <div className='container' >
            <form className='container  py-4 pb-2' id="createformbox" onSubmit={handleSubmit}>


                <div className="header mb-4 d-flex justify-content-between" >
                    <h2>Create Account</h2>
                    <img src={logo} alt="..." height="40px"/>
                </div><hr />
                <div className="mb-2">
                    <label htmlFor="name"  className="form-label ty mb-1">Your Name</label>
                    <input type="text" autoFocus
                        maxLength="15"
                        required className="form-control form-control-sm"
                        id="name" aria-describedby="name"
                        autoComplete='true'
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="form-label ty mb-1">Email address</label>
                    <input type="email" required className="form-control form-control-sm"
                        id="email" aria-describedby="emailHelp"
                        placeholder='xyz@gmail.com'
                        autoComplete='true'
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="phone" className="form-label ty mb-1">Phone</label>
                    <input type="phone" required className="form-control form-control-sm" maxLength="10" id="phone"
                    autoComplete='true'/>
                </div>
                <div className="mb-2">
                    <label htmlFor="password" className="form-label ty mb-1">Password</label>
                    <input autoComplete='true' type={passwordtype} minLength="6" required className="form-control form-control-sm" id="password" placeholder='password must be atleast 6 characters' />
                </div>
                <div className="mb-4">
                    <label htmlFor="cpassword" className="form-label ty mb-1">Confirm password</label>
                    <input type={passwordtype} 
                    autoComplete="true" required className="form-control form-control-sm" id="cpassword" />
                </div>
                <div className="mb-2  d-flex align-items-center justify-content-end">
                    <input className="me-1"type="checkbox" id="check2" onChange={handleCheckChange} />
                    <label className="" htmlFor="check1">show password</label>
                </div>
                <div className="mb-4 d-flex align-items-center">
                    <input className="ms-0" type="radio" name="radio" id='radio11' defaultChecked onChange={fun} />
                    <label className="ms-2"  htmlFor="radio11">Buyer</label>
                    <input className="ms-4" type="radio" name="radio" id='radio22' onChange={fun}/>
                    <label className="ms-2" htmlFor="radio22">Seller</label>
                </div>
                {/* <button type="submit" className="card_button mb-2" style={{ width: "100%" }}>{buttontext}</button> */}
                <Button type="submit" className="mb-2 mybtn" variant="contained">{loading?<Whitespinner/>:buttontext}</Button>
                <p>By creating account, You agree out <a href="/"><strong>terms and condition</strong></a> and <a href=""><strong>private policy</strong></a></p><hr />
                <p>already have an account <NavLink to="/Login"><strong>sign-in</strong></NavLink> here</p>

            </form>
        </div>
    )
}

export default Sellercreateaccount