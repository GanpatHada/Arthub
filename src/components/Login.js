import React, { useEffect } from 'react'
import logo from "./icons/newlogo.png"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import './Login.css';
const Login = () => {
    useEffect(() => {
        document.getElementById("searchbox").style.display="none";
        document.getElementById("mainart").style.display="none";
        document.getElementById("mainnavbar").style.display="none"}, [])
    let navigate = useNavigate();
    const [passwordtype, setpasswordtype] = useState("password")
    const [logintext, setlogintext] = useState("Login as Buyer")
    const fun = () => {
        if (document.getElementById("radio2").checked)
            setlogintext("Login as Seller")
        else
            setlogintext("Login as Buyer")
    }
    const handleCheckChange=()=>{
        if(document.getElementById("check1").checked)
          setpasswordtype('text');
        else
          setpasswordtype('password');  
    }
    const handleloginsubmit = async (e) => {
        e.preventDefault();
        const emailphone = document.getElementById("emailphone").value;
        const password = document.getElementById("password").value;
        if (document.getElementById("radio2").checked) {
            try {
                const response = await fetch("http://localhost:8000/api/seller/login", {
                    method: 'POST',
                    headers: {
                        'Content-type': "application/json"
                    },
                    body: JSON.stringify({ emailphone: emailphone, password: password })
                });
                const json = await response.json();
                console.log(json)
                if (!json.success) {
                    console.log(json.message);
                    alert("sorry! something error has been occured");
                }
                else {
                    localStorage.setItem('token', json.token);
                    localStorage.setItem('name', json.name);
                    localStorage.setItem('role', json.role);
                    localStorage.setItem('id', json.id);
                    navigate('/');

                }
            } catch (error) {
                console.log(error);
                navigate("/servererror")

            }
        }
        if (document.getElementById("radio1").checked) {

            try {
                const response = await fetch("http://localhost:8000/api/user/login", {
                    method: 'POST',
                    headers: {
                        'Content-type': "application/json"
                    },
                    body: JSON.stringify({ emailphone: emailphone, password: password })
                });
                const json = await response.json();
                console.log(json)
                if (!json.success) {
                    console.log(json.message);
                    alert("sorry! something error has been occured");
                }
                else {
                    localStorage.setItem('token', json.token);
                    localStorage.setItem('name', json.name);
                    localStorage.setItem('role', json.role);
                    localStorage.setItem('id', json.id);
                    alert(`Login successfull as ${json.role}`);
                    navigate("/Arthub");
                    
                    



                }
            } catch (error) {
                console.log(error);
                navigate("/servererror")

            }
        }
    }
    return (

        <div className='container'>
            <form id="loginformbox" className='container py-4 pb-2 ' onSubmit={handleloginsubmit} >

                <div className="d-flex justify-content-between">
                    <div className="header mb-2 text-center">
                        <h2>Login</h2>
                    </div>

                    <a className="" href="#">
                        <img src={logo} alt="" height="55px" />
                    </a>

                </div>
                <hr />
                <div className="mb-2">
                    <label htmlFor="email" autoComplete="true" className="form-label ty mb-1">Email or Mobile</label>
                    <input type="text" required className="form-control form-control-sm "
                        id="emailphone" autoFocus aria-describedby="emailHelp"

                    />
                </div>
         
                <div className="mb-2">
                    <label htmlFor="password" autoComplete="true" className="form-label ty mb-1">Password</label>
                    {<input type={passwordtype} minLength="6" required className="form-control form-control-sm" id="password" />}
                </div>
                <div className="mb-2  d-flex align-items-center justify-content-end">
                    <input className="me-1"type="checkbox" id="check1" onChange={handleCheckChange} />
                    <label className="" htmlFor="check1">show password</label>
                </div>
                <div className="mb-2 d-flex align-items-center " >
                    <input className="me-1" type="radio" name='radio' id='radio1' defaultChecked onChange={fun} />
                    <label className="me-3" htmlFor="radio1">Buyer</label>
                    <input className="me-1" type="radio" name='radio' id='radio2' onChange={fun} />
                    <label className="me-3" htmlFor="radio2">Seller</label>
                </div>


                {/* <button type="submit" className="card_button mb-2 mt-3" style={{ width: "100%" }}>{logintext}</button> */}
                <Button type="submit" className="mb-2 mybtn" style={{width:"100%"}} variant="contained">{logintext}</Button>
                <p>Don't have account <NavLink to="/createaccount"><strong>Sign up</strong></NavLink>&nbsp;here..</p>


            </form>

        </div>
    )
}

export default Login