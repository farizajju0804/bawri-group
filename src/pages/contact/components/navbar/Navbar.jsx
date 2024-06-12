import React from 'react'
import nav_icon from '../../assets/nav-icon.svg'
import "./Navbar.css"
import { useState } from 'react'
import Navpage from './Navpage'

const Navbar =() => {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleClick() {
    setIsOpen(prev => !prev)
  }


  return (
    <>
    <div className="header">
      <div className='header-inner-container'>
        <div>
          <p className="company-logo">BawriGroup</p>
        </div>
        <div onClick={handleClick}>
          <img className="navigation-icon" src={nav_icon} alt="Your SVG" />
        </div>
      </div>
    </div>
    {isOpen &&  <Navpage setIsOpen={setIsOpen} />}
    </>
  )
}

export default Navbar