import React from 'react';
import './StorySlide.css';
import Timeline from './Timeline'; // Adjust the import path accordingly

const StorySlide = ({ year, name, image, content, bgImage, totalStories, onDotClick, storyIndex, years }) => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`
  };
  const bgStyle2 = {
    backgroundImage: `url(${image})`,
  };

  const isMobile = window.innerWidth < 768;
  const textClass = 'story-content-text';
  return (
    <div className='story-outer-div'>
      <div className='story-heading-div'>
        <div className='story-heading-content-box'>
          <p className='story-heading-year'>{year}</p>
          <p className='story-heading-name'>{name}</p>
        </div>
      </div>

      <div className='story-main' style={bgStyle}>
        <div className='story-img' style={bgStyle2}></div>
        {/* <img className='story-img' src={image} alt='story' /> */}
        <div className='story-main-div'>
          {content.map((item, index) => (
            <p key={index} className={textClass}>{item}</p>
          ))}
        </div>
        {
          !isMobile && (
            <Timeline 
            totalStories={totalStories} 
            currentStoryIndex={storyIndex} 
            onDotClick={onDotClick} 
            years={years}
          />
          )
        }
        
      </div>
    </div>
  );
};

export default StorySlide;
