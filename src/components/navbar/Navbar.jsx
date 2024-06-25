import React, { useState } from 'react';
import gsap from 'gsap';
import { IoChevronDownOutline,IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
// import { FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css';
import {Link} from 'react-router-dom'
const FullScreenNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleNav = () => {
    console.log(isOpen)
    setIsOpen(!isOpen);
  
    if (!isOpen) {
      gsap.to('.fullscreen-nav', { duration: 0.5, x: 0 });
    } else {
      gsap.to('.fullscreen-nav', { duration: 0.5, x: '100%' });
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeNav = () => {
    gsap.to('.fullscreen-nav', { duration: 0.5, x: '100%' });
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div>
      <div className="nav-header z-[1002]">
      <a href='/'><div className="logo ">BawriGroup</div></a>
        <button className="nav-toggle" onClick={toggleNav}>
          {isOpen ? <IoClose size={24} /> : <RiMenu4Line size={24} />}
        </button>
      </div>
      <div className={`fullscreen-nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li className="nav-item">
            <a href="#" onClick={() => toggleDropdown('ourCompanies')}>
              Our Companies <IoChevronDownOutline />
            </a>
            {activeDropdown === 'ourCompanies' && (
              <ul className="dropdown">
                <li><a href="/profit" onClick={closeNav}>For-Profit</a></li>
                <li><a href="/non-profit" onClick={closeNav}>Non-Profit</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => toggleDropdown('aboutUs')}>
              About Us <IoChevronDownOutline />
            </a>
            {activeDropdown === 'aboutUs' && (
              <ul className="dropdown">
                <li><a href="/about" onClick={closeNav}>About Us</a></li>
                <li><a href="/mission" onClick={closeNav}>Mission & Vision</a></li>
                <li><a href="/values" onClick={closeNav}>Values</a></li>
                <li><a href="/team" onClick={closeNav}>Team</a></li>
                <li><a href="/our-story" onClick={closeNav}>Story</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="/contact" onClick={closeNav}>Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullScreenNav;
