import React, { useEffect } from 'react'
import './Developer.css'
import akh from './icons/akhilesh.jpeg'
import gan from './icons/ganpat.jpeg'
const Developer = () => {
    useEffect(() => {
        document.getElementById("mainart").style.display = "flex";
        document.getElementById("mainnavbar").style.display = "flex";
      }, [])
    return (
        <div>
            <div id="developerheading">
                <h1>Developers</h1>
            </div>

            <div className="persons">
                <img src={gan} alt="" /><br />
                <span className="name">GANPAT HADA</span>
                <span className="role">Student at SCSIT DAVV</span>
            </div>
            <div className="persons">
                <img src="https://celebsupdate.com/wp-content/uploads/2020/02/Hrithik-Roshan-Most-Handsome-Bollywood-Actors.jpg" alt="" /><br />
                <span className="name">PRATEEK CHANDANA</span>
                <span className="role">Student at SCSIT DAVV</span>
            </div>
            <div className="persons">
                <img src={akh} alt="" /><br />
                <span className="name">AKHILESH GUPTA</span>
                <span className="role">Student at SCSIT DAVV</span>
            </div>

        </div>
    )
}

export default Developer