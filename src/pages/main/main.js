import "./main.css"
import LeftChild from "./leftChild1";
import RightChild from "./rightChild1"
import image1 from "./assets/1.png"
import image2 from "./assets/2.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
// import nav_icon from "../assets/nav-icon.svg"
import {Link} from "react-router-dom";
const NonProfit = () => {
  return (
    <div className="page">
  
      <div className="main">
        <div className="heading-container">
          <div className="heading-1-container">
            <h2 className="heading-1">
              Non-Profit
            </h2>
          </div>
          <div className="heading-2-container">
            <div className="heading-2-innner-container">
              <h2 className="heading-2">Serving India Since</h2>
              <h2 className="heading-3">1873</h2>
          </div>
          </div>
        </div>
        <div className="circle-container">
          <Link to="/non-profit/bawri-school" style={{textDecoration: 'none'}}>
          <LeftChild image={image1} title="Education" />
          </Link>
          <Link to="/non-profit/ideopedia" style={{textDecoration: 'none'}}>
          <RightChild image={image2} title="Knowledge" />
          </Link>
          <Link to="/non-profit/growth" style={{textDecoration: 'none'}}>
          <LeftChild image={image6} title="Economic Growth" />
          </Link>
          <Link to="/non-profit/think" style={{textDecoration: 'none'}}>
          <RightChild image={image4} title="National Unity" />
          </Link>
          <Link to="/non-profit/bawri-eye-hospital" style={{textDecoration: 'none'}}>
          <LeftChild image={image5} title="Healthcare" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NonProfit;