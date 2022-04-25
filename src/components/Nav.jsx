import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navbar'>
        <Link className='logo' to='/'>LOGO</Link>
        <ul className='nav-links'>
            <Link className='nav-item' to='/about'>About</Link>
            <Link className='nav-item' to='/contact'>Contact</Link>
            <Link className='nav-item' to='/support'>Support Us</Link>
            
        </ul>
    </div>
  )
}

export default Nav