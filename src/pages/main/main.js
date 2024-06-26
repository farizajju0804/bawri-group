import React from 'react';
import { Link } from 'react-router-dom';
import image1 from "./assets/1.png";
import image2 from "./assets/2.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
import './main.css';

const Main = () => {
  const items = [
    { title: "Education", image: image1, path: "/non-profit/bawri-school" },
    { title: "Knowledge", image: image2, path: "/non-profit/ideopedia" },
    { title: "Economic Growth", image: image6, path: "/non-profit/growth" },
    { title: "National Unity", image: image4, path: "/non-profit/unity" },
    { title: "Healthcare", image: image5, path: "/non-profit/bawri-eye-hospital" }
  ];

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
          {items.map((item, index) => (
            <Link to={item.path} style={{ textDecoration: 'none' }} key={index}>
              <div className={`child ${index % 2 === 0 ? 'left-child' : 'right-child'}`}>
                <div className={`image-div ${index % 2 === 0 ? 'left-image-div' : 'right-image-div'}`}>
                  <img className="image" src={item.image} alt={item.title} />
                </div>
                <div className={`content-div ${index % 2 === 0 ? 'left-content-div' : 'right-content-div'}`}>
                  <div className="text-center poppins-regular">{item.title}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
