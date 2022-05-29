import React, { useEffect } from 'react'
import './About.css'
const About = () => {
  useEffect(() => {
    document.getElementById("mainart").style.display = "flex";
    document.getElementById("mainnavbar").style.display = "flex";
  }, [])
  
  return (
    <>
    <div id="aboutheading">
     <h1> About us</h1>
    </div>
    <div id="aboutcontainer">
       <div id="basicintro">
           <h2>Introduction</h2>
           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt vitae eveniet ex laboriosam dolor assumenda eum nostrum perferendis quas, reiciendis consequatur, asperiores ipsum sit incidunt pariatur! Aliquam nam laborum adipisci unde provident quam temporibus dolor dolorem ab repellat numquam, illum perferendis pariatur reprehenderit ipsum eveniet veniam nobis mollitia eligendi.</span>
       </div>
       <div id="Terms_and_Condition">
       <h2>Terms and Condition</h2>
           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt vitae eveniet ex laboriosam dolor assumenda eum nostrum perferendis quas, reiciendis consequatur, asperiores ipsum sit incidunt pariatur! Aliquam nam laborum adipisci unde provident quam temporibus dolor dolorem ab repellat numquam, illum perferendis pariatur reprehenderit ipsum eveniet veniam nobis mollitia eligendi.</span>
       </div>
       <div id="Privacy_policy">
       <h2>Privacy policy</h2>
           <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure deserunt vitae eveniet ex laboriosam dolor assumenda eum nostrum perferendis quas, reiciendis consequatur, asperiores ipsum sit incidunt pariatur! Aliquam nam laborum adipisci unde provident quam temporibus dolor dolorem ab repellat numquam, illum perferendis pariatur reprehenderit ipsum eveniet veniam nobis mollitia eligendi.</span>
       </div>
    </div>
    </>
  )
}

export default About