import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Welcome.css'
import logo from './icons/newlogo.png'
const Welcome = () => {
  let navigate = useNavigate();
  useEffect(() => {
    //   localStorage.clear();
    document.getElementById("searchbox").style.display = "none";
    document.getElementById("mainart").style.display = "none";
    document.getElementById("mainnavbar").style.display = "none";
  }, [])
  return (
    <div className="welcome">
      <div id="demobox">
        <img src={logo} alt="" height="50px" />
        <Link to="/login"><button type="button" id="newloginbtn">Login</button></Link>
      </div>
      <div className="box">
        <div>
          <div className="Welcomeheading" style={{ color: "white" }}><b>Welcome to the<br /><span>Arthub</span>
          </b></div>
          <div id='contenttext'>
            <span>Lorem ipsum dolor, sit  Voluptatem aperiam molestias magnam veniam quas repellat repellendus quod repudiandae rerum illum.</span>
          </div>
          <div>
            <button id="signupbutton" onClick={() => { navigate('/createaccount') }}>Create account</button>
            <button id="loginbutton" onClick={() => { navigate('/login') }}>Login</button>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Welcome