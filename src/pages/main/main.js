import "./main.css"
import LeftChild from "./components/leftChild";
import RightChild from "./components/rightChild"
import image1 from "./assets/1.png"
import image2 from "./assets/2.png";
import image4 from "./assets/4.png";
import image5 from "./assets/5.png";
import image6 from "./assets/6.png";
import { Link } from "react-router-dom";

const NonProfit = () => {
  return (
    <div className="page">
      {/* <div className="header">
        <div>
          <p className="header-logo">BawriGroup</p>
        </div>
        <div>
          <img className="navigation-icon" src={nav_icon} alt="Your SVG" />
        </div>
      </div> */}

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
          <Link to="/education" style={{textDecoration: 'none'}}>
            <LeftChild image={image1} title="Education" />
          </Link>
          <Link to="/idea" style={{textDecoration: 'none'}}>          
              <RightChild image={image2} title="Knowledge" />
          </Link>
          <Link to="/growth" style={{textDecoration: 'none'}}>
            <LeftChild image={image6} title="Economic Growth" />

          </Link>

          <Link to='/think' style={{textDecoration: 'none'}}>         
             <RightChild image={image4} title="National Unity" />
          </Link>
          <Link to="/health" style={{textDecoration: 'none'}}>         
           <LeftChild image={image5} title="Healthcare" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NonProfit;
