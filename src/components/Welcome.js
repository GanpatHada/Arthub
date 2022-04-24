import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Welcome.css'
const Welcome = () => {
  let navigate=useNavigate();
  useEffect(() => {
    localStorage.clear();
  })

  return (
    <div className="welcome">
      <div className="box">
        <div>
          <h1 className="Welcomeheading" style={{ color: "white" }}><b>Welcome to the<br /><span>Arthub</span>
          </b></h1>
          <div id='contenttext'>
          <p>Lorem ipsum dolor, sit  Voluptatem aperiam molestias magnam veniam quas repellat repellendus quod repudiandae rerum illum.</p>
        </div>
        <div>
          <button className="button2" id="signupbutton" onClick={()=>{navigate('/createaccount')}}>Create account</button>
        </div>
        </div>
       
      </div>

    </div>
  )
}

export default Welcome