import React from 'react'
import logo from "./icons/newlogo.png"
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
const Login = () => {
    const [logintext, setlogintext] = useState("Login as Buyer")
    useEffect(() => {
        document.getElementById("headerimage").style.display = "none";
    })
    const fun = () => {
        if (document.getElementById("radio2").checked)
            setlogintext("Login as Seller")
        else
            setlogintext("Login as Buyer")
    }
    const handleloginsubmit=async(e)=>{
        e.preventDefault();
        const emailphone=document.getElementById("emailphone").value;
        const password=document.getElementById("password").value;
        if(document.getElementById("radio2").checked)
        {
            const response = await fetch("http://localhost:8000/api/seller/login", {
                method: 'POST',
                headers: {
                    'Content-type': "application/json"
                },
                body: JSON.stringify({ emailphone:emailphone, password:password })
            });
            const json = await response.json();
            console.log(json)
            if (!json.success)
                {console.log(json.message);
                    alert("sorry! something error has been occured");
                }
            else
                {alert(`Login successfull as ${json.role}`); 
                localStorage.setItem('token', json.token);
                localStorage.setItem('name', json.name);
                localStorage.setItem('role', json.role);
            }  
        }
        if(document.getElementById("radio1").checked)
        {
            
        }
    }
    return (

        <div className='container'>
            <form className='container py-4 pb-2' style={{ border: "1px solid #D3D3D3", borderRadius: "6px", overflow: "auto", marginTop: "40px", marginBottom: "60px" }} onSubmit={handleloginsubmit} >

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
                    <input type="password" minLength="6" required className="form-control form-control-sm" id="password" />
                </div>
                <div className="mb-2">
                    <input className="me-1" type="radio" name='radio' id='radio1' defaultChecked onChange={fun} />
                    <label className="me-3" htmlFor="radio1">Buyer</label>
                    <input className="me-1" type="radio" name='radio' id='radio2' onChange={fun} />
                    <label className="me-3" htmlFor="radio2">Seller</label>
                </div>


                <button type="submit" className="btn btn-warning text-black mb-2 mt-3" style={{ width: "100%" }}>{logintext}</button>
                <p>Don't have account <NavLink to="/createaccount"><strong>Sign up</strong></NavLink>&nbsp;here..</p>


            </form>

        </div>
    )
}

export default Login