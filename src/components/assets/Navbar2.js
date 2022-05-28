import React, { useState } from 'react'
import './navbar2.css'
import logo from '../icons/newlogo.png'
import { NavLink,Link, useNavigate } from 'react-router-dom'
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// ---------------------------------
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// ------------------------------------
const Navbar2 = () => {
  const navigate = useNavigate();
  const [expand, setexpand] = useState(false);
  const [height, setheight] = useState("60px");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toogle = () => {
    if (height == "60px") {
      setexpand(true);
      setheight("380px");
    }
    else {
      setexpand(false);
      setheight("60px");
    }
  }
  const handleLogout = () => {
    if (window.confirm("Do you really want to Logout")) {
      localStorage.clear();
      navigate("/welcome");
    }

  }
  return (
    <nav style={{ height: height }} id="mainnavbar">
      <section>
        <img id="logo" src={logo} alt="..." />
      </section>
      <section id="middle">
        <NavLink className="navitems" to="/">Home</NavLink>
        <NavLink className="navitems" to="/About">About</NavLink>
        <NavLink className="navitems" to="/Art">Blogs</NavLink>
        <NavLink className="navitems" to="/Art">Query</NavLink>
        <NavLink className="navitems" to="/Art">Other</NavLink>
      </section>
      <section id="last">
        <Tooltip title="dark mode disabled"><LightModeIcon style={{ color: "white" }} /></Tooltip>
        <Tooltip title="notifications">
          <Badge badgeContent={4} color="success">
            <NotificationsIcon style={{ color: "white" }} />
          </Badge>
        </Tooltip>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title={`${localStorage.getItem('role')} Account`}>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 0 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} >{localStorage.getItem('role')?localStorage.getItem('role').charAt(0).toUpperCase():""}</Avatar>
            </IconButton>
          </Tooltip>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem>
            <Avatar /> Profile
          </MenuItem>
          {localStorage.getItem('role') === "buyer" ? <MenuItem>

            <Link className='d-flex align-items-center' style={{ color: "#000000DE" }} to="/wishlist"> <ListItemIcon>
              <ShoppingCartIcon fontSize="small" />
            </ListItemIcon>My Wishlist</Link>
          </MenuItem> : <MenuItem>

            <Link className='d-flex align-items-center' style={{ color: "#000000DE" }} to="/uploaditems"> <ListItemIcon>
              <CloudUploadIcon fontSize="small" />
            </ListItemIcon>Upload art</Link>
          </MenuItem>}
          {localStorage.getItem('role')==="seller"&&<MenuItem>
            <Link className='d-flex align-items-center' style={{ color: "#000000DE" }} to="/buyrequest"><ListItemIcon>
              < LocalMallIcon fontSize="small" />
            </ListItemIcon>Buy requests</Link>
          </MenuItem>}
          {localStorage.getItem('role') === "buyer" ? <MenuItem>

            <Link className='d-flex align-items-center' style={{ color: "#000000DE" }} to="/mystore"><ListItemIcon>
              < LocalMallIcon fontSize="small" />
            </ListItemIcon>My store</Link>
          </MenuItem> : <MenuItem>

            <Link className='d-flex align-items-center' style={{ color: "#000000DE" }} to="/sellinghistory"><ListItemIcon>
              < LocalMallIcon fontSize="small" />
            </ListItemIcon>My store</Link>
          </MenuItem>}

          

          <Divider />

          <MenuItem>
            <button onClick={handleLogout} className='d-flex align-items-center' style={{ border: "none", backgroundColor: "transparent" }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout</button>
          </MenuItem>
        </Menu>
        {/* <Avatar alt="Remy Sharp"src="https://nettv4u.com/imagine/23-10-2019/hrithik-roshan.jpg" /> */}
      </section>
      {/* <MenuIcon class="togglemenu"/> */}
      {expand == true ? <CloseIcon id="togglemenu" onClick={toogle} />
        : <MenuIcon id="togglemenu" onClick={toogle} />}
    </nav>
  )
}

export default Navbar2