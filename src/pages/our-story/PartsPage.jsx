// PartsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { storyData } from './assets/storyData';
import './PartsPage.css';

const PartsPage = () => {
  return (
    <div className="parts-page">
      <div className="parts-header">
        <h1>The Bawri Group</h1>
        <p>A Legacy of Fortitude, Resilience, and Triumph</p>
      </div>
      <div className="parts-selection">
        {Object.keys(storyData).map((key, index) => (
          <Link key={index} to={`/our-story/${key}`} className="part-link">
            <div className="part">
              <img src={storyData[key].imageUrl} alt={storyData[key].name} />
              <h3>{storyData[key].name}</h3>
              <p>{storyData[key].year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PartsPage;
