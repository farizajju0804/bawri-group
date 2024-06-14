import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
import './main.css';

const Main = () => {
  return (
    <div className="page">
      <div className="main">
        <div className="heading-container">
          <div className="heading-1-container">
            <h2 className="heading-1">Non-Profit</h2>
          </div>
          <div className="heading-2-container">
            <div className="heading-2-inner-container">
              <h2 className="heading-2">Serving India Since</h2>
              <h2 className="heading-3">1873</h2>
            </div>
          </div>
        </div>
        <div className="circle-container">
          <Link to="/non-profit/bawri-school" style={{ textDecoration: 'none' }}>
            <div className="child-1">
              <div className="left-image-div">
                <img className="left-image" src={image1} alt="Education" />
              </div>
              <div className="left-content-div">
                <div className="left-content">Education</div>
              </div>
            </div>
          </Link>
          <Link to="/non-profit/ideopedia" style={{ textDecoration: 'none' }}>
            <div className="right-child">
              <div className="right-content-div">
                <div className="right-content">Knowledge</div>
              </div>
              <div className="right-image-div">
                <img className="right-image" src={image2} alt="Knowledge" />
              </div>
            </div>
          </Link>
          <Link to="/non-profit/growth" style={{ textDecoration: 'none' }}>
            <div className="child-1">
              <div className="left-image-div">
                <img className="left-image" src={image6} alt="Economic Growth" />
              </div>
              <div className="left-content-div">
                <div className="left-content">Economic Growth</div>
              </div>
            </div>
          </Link>
          <Link to="/non-profit/think" style={{ textDecoration: 'none' }}>
            <div className="right-child">
              <div className="right-content-div">
                <div className="right-content">National Unity</div>
              </div>
              <div className="right-image-div">
                <img className="right-image" src={image4} alt="National Unity" />
              </div>
            </div>
          </Link>
          <Link to="/non-profit/bawri-eye-hospital" style={{ textDecoration: 'none' }}>
            <div className="child-1">
              <div className="left-image-div">
                <img className="left-image" src={image5} alt="Healthcare" />
              </div>
              <div className="left-content-div">
                <div className="left-content">Healthcare</div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
