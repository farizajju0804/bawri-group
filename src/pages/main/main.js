import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './main.css';

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/non-profit-companies.json');
        const data = await response.json();
        const sortedData = data.nonProfit.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        setItems(sortedData);
      } catch (error) {
        console.error('Error fetching the data', error);
      }
    };

    fetchData();
  }, []);

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
            <Link to={`/non-profit/${item.id}`} style={{ textDecoration: 'none' }} key={index}>
              <div className={`child ${index % 2 === 0 ? 'left-child' : 'right-child'}`}>
                <div className={`image-div ${index % 2 === 0 ? 'left-image-div' : 'right-image-div'}`}>
                  <img className="image" src={item.categoryImage} alt={item.categoryName} />
                </div>
                <div className={`content-div ${index % 2 === 0 ? 'left-content-div' : 'right-content-div'}`}>
                  <div className="text-center poppins-regular">{item.categoryName}</div>
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
