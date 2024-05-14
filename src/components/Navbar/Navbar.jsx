import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const[sticky , setSticky] = useState(false);
  useEffect(()=>{
    window,addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])

  return (
    <nav className={`container ${sticky?'dark-nav' : ''}`}>
        <img src={logo} alt="the logo" className='logo'/>
        <ul>
            <li> <Link to='hero' smooth={true} offset={0} duration={500}>home</Link></li>
            <li><Link to='programs' smooth={true} offset={-260} duration={500}>programs</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>about</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>contact us</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar