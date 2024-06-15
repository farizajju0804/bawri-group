import React from 'react';
import './Timeline.css';

const Timeline = ({ totalStories, currentStoryIndex, onDotClick, years }) => {
  return (
    <div className="timeline-container">
      <div className="timeline-innercontainer">
        {years.map((year, index) => (
          <div
            key={index}
            className={`timeline-item ${currentStoryIndex === index ? 'active' : ''}`}
            onClick={() => onDotClick(index)}
          >
            <div className='timeline-dot'></div>
            {currentStoryIndex === index && (
              <div className='timeline-year'>{year}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
