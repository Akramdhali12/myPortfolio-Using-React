// import React from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
import logo from '../../assets/akram-logo.png'
import { useState, useRef } from 'react'
import underline from '../../assets/underline.png'
import menu_open from '../../assets/menu-bar.png'
import menu_close from '../../assets/menu-close.png'

const Navbar = () => {
  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu =()=>{
    menuRef.current.style.right =0;
  }
  const closeMenu =()=>{
    menuRef.current.style.right ="-350px";
  }

  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><Link to='home' spy={true} smooth={true} offset={100}><p onClick={()=>setMenu("home")}>Home</p></Link>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><Link to='about' spy={true} smooth={true} offset={100}><p onClick={()=>setMenu("about")}>About Me</p></Link>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            <li><Link to='services' spy={true} smooth={true} offset={100}><p onClick={()=>setMenu("services")}>Services</p></Link>{menu==="services"?<img src={underline} alt=''/>:<></>}</li>
            <li><Link to='work' spy={true} smooth={true} offset={100}><p onClick={()=>setMenu("work")}>Portfolio</p></Link>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><Link to='contact' spy={true} smooth={true} offset={100}><p onClick={()=>setMenu("contact")}>Contact</p></Link>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><Link to='contact' spy={true} smooth={true} offset={100}>Connect With Me</Link></div>
    </div>
  )
}

export default Navbar;