import React, { useState } from 'react'
import './navbar2.css'
import logo from '../icons/newlogo.png'
import { NavLink, useNavigate } from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar2 = () => {
  const [expand, setexpand] = useState(false);
  const [height, setheight] = useState("60px");
  const toogle=()=>{
    if(height=="60px")
    {
      setexpand(true);
      setheight("380px");
    }
    else{
      setexpand(false);
      setheight("60px");
    }
  }
  return (
    <nav style={{height:height}} id="mainnavbar">
      <section style={{width:"130px"}}>
        <img id="logo" src={logo} alt="..." />
      </section>
      <section id="middle">
        <NavLink className="navitems" to="/Welcome">Home</NavLink>
        <NavLink className="navitems" to="/About">About</NavLink>
        <NavLink className="navitems" to="/Arthub">Blogs</NavLink>
        <NavLink className="navitems" to="/Arthub">Query</NavLink>
        <NavLink className="navitems" to="/Arthub">Other</NavLink>
      </section>
      <section id="last">
        <LightModeIcon style={{ color: "white" }} />
        
        <Badge badgeContent={4} color="success">
         <NotificationsIcon style={{color:"white"}}/>
        </Badge>
        <Avatar alt="Remy Sharp"src="https://nettv4u.com/imagine/23-10-2019/hrithik-roshan.jpg" />
      </section>
      {/* <MenuIcon class="togglemenu"/> */}
      {expand==true?<CloseIcon id="togglemenu" onClick={toogle}/>
      :<MenuIcon id="togglemenu"  onClick={toogle}/>}
    </nav>
  )
}

export default Navbar2