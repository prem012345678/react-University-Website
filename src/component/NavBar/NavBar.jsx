import React, { useEffect, useState } from 'react'
import {Link} from 'react-scroll'
import './navbar.css'
const NavBar = () => {
const[menu,setMenu]=useState(false)
  const[stikey,setStikey]=useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setStikey(true) : setStikey(false)
    })
  })
const toggleMenu=()=>{
menu ? setMenu(false):setMenu(true)
}

  return (<>
    <nav className={`container ${stikey ? 'dark_nav' : '' }`}>
        <img src='./assets/logo.png' alt='log'/>
        <ul className={menu ? '':'menuIcons'}>
            <li><Link to='hero' offset={0} smooth={true} duration={500} >home</Link> </li>
            <li><Link to='program' offset={-260} smooth={true} duration={500} >program</Link></li>
            <li><Link to='about' offset={-150} smooth={true} duration={500} >about </Link></li>
            <li><Link to='campus' offset={-260} smooth={true} duration={500} >campus</Link></li>
            <li><Link to='testimonial' offset={-260} smooth={true} duration={500} >testimonials</Link></li>
            <li><Link to='contact' offset={-260} smooth={true} duration={500} className='btn'>contact us</Link></li>
        </ul>
        <img src='./assets/menu-icon.png' className='menuIcon' onClick={toggleMenu} />
    </nav>
  </>)
}

export default NavBar