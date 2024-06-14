import React from 'react';
import { Link } from 'react-router-dom';
import './Roadsection.css';

const RoadSection = ({ leftLink, leftImage, middleImage, rightLink, rightImage }) => {
  return (
    <div className='road-section-div child'>
      <Link to={leftLink} className='link'>
        <img className='road-section-left' src={require(`./assets/${leftImage}`)} alt="Left" />
      </Link>
      <img className='road-section-middle' src={require(`./assets/${middleImage}`)} alt="Middle" />
      <Link to={rightLink} className='link'>
        <img className='road-section-right' src={require(`./assets/${rightImage}`)} alt="Right" />
      </Link>
    </div>
  );
};

export default RoadSection;
