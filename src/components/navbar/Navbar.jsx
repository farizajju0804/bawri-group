import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { IoChevronDownOutline, IoClose } from "react-icons/io5";
import { RiMenu4Line } from "react-icons/ri";
import { match } from 'path-to-regexp';
import './Navbar.css';
import { Link } from 'react-router-dom';

const FullScreenNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Define routes where the navbar should be transparent
  const transparentRoutes = [''];
  const dynamicRoutes = ['/our-story/:partId'];

  // Function to check if the current path matches any dynamic routes
  const isDynamicRoute = (path) => {
    return dynamicRoutes.some((route) => match(route, { decode: decodeURIComponent })(path));
  };

  // Check if the current route is in the transparentRoutes array or matches a dynamic route
  const isTransparent = transparentRoutes.includes(location.pathname) || isDynamicRoute(location.pathname);

  const toggleNav = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to('.fullscreen-nav', { duration: 0.5, x: 0 });
    } else {
      gsap.to('.fullscreen-nav', { duration: 0.5, x: '100%' });
      setActiveDropdown(null);
    }
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeNav = () => {
    gsap.to('.fullscreen-nav', { duration: 0.5, x: '100%' });
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <div>
      <div className={`nav-header z-[1002] ${isTransparent ? 'bg-transparent absolute' : 'bg-white fixed'}`}>
        <Link to='/' className="logo">BawriGroup</Link>
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
                <li><Link to="/profit" onClick={closeNav}>For-Profit</Link></li>
                <li><Link to="/non-profit" onClick={closeNav}>Non-Profit</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <a href="#" onClick={() => toggleDropdown('aboutUs')}>
              About Us <IoChevronDownOutline />
            </a>
            {activeDropdown === 'aboutUs' && (
              <ul className="dropdown">
                <li><Link to="/about" onClick={closeNav}>About Us</Link></li>
                <li><Link to="/mission" onClick={closeNav}>Mission & Vision</Link></li>
                <li><Link to="/values" onClick={closeNav}>Values</Link></li>
                <li><Link to="/team" onClick={closeNav}>Team</Link></li>
                <li><Link to="/our-story" onClick={closeNav}>Story</Link></li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/contact" onClick={closeNav}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullScreenNav;
