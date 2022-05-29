import React from 'react'
import './Footer.css'
import tt from '../icons/tt.png'
import yt from '../icons/yt.png'
import fb from '../icons/fb.png'
import ig from '../icons/ig.png'
import { Link,} from 'react-router-dom'
const Footer = () => {
  return (
    <footer id="mainfooter">
      <section id="social">
        <h2>Follow us on</h2>
        <div id="footericons">
          <a href="https://twitter.com/i/flow/login" target='_blank'><img src={tt} alt=".." /></a>
          <a href="https://www.youtube.com/" target='_blank'><img src={yt} alt=".." /></a>
          <a href="https://www.instagram.com/?hl=en" target='_blank'><img src={ig} alt=".." /></a>
          <a href="https://www.facebook.com/" target='_blank'><img src={fb} alt=".." /></a>

        </div>
      </section>
      <section id="info">
        <div id="mission"  className='infobox'>
          <h2>Our Mission</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            e ea quam nisi sit amet consectetur
          </p>
        </div>
        <div id="links" className='infobox'>
          <h2>Links</h2>
          <Link to='/developer'>Developer</Link>
          <Link to='/'>Blog</Link>
          <Link to='/About'>About</Link>
        </div>
        <div id="contact"  className='infobox'>
        <h2>Contact</h2>
          <span>4578457845</span>
          <span>xyz@gmail.com</span>
        </div>
      </section>
      <section id="copyright">
        <div><p>© 2022 | All rights reserved | Designed by&nbsp;
        <span id="inspan">&#9830; Ganpat Hada</span></p> </div>
        </section>  
    </footer>
  )
}

export default Footer