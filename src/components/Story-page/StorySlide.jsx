import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StorySlide.css';
import Timeline from './Timeline'; // Adjust the import path accordingly
import {MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const StorySlide = ({ year, name, image, content, bgImage, totalStories, onDotClick, storyIndex, years, bgPosition, partId }) => {
  const bgStyle = {
    backgroundImage: `url(${bgImage})`
  };
  const bgStyle2 = {
    backgroundImage: `url(${image})`,
    backgroundPosition: bgPosition
  };
 
  const longYears = ['1986']
  const isMobile = window.innerWidth < 768;
  const textClass = longYears.includes[year] ? 'story-content-text poppins-regular' : 'story-content-text poppins-regular' ;

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const handleResize = () => {
      // Force re-render on window resize
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderButtons = () => {
    if (storyIndex === totalStories - 1) {
      switch (partId) {
        case 'part1':
          return (
            <>
              <button className='nav-button' onClick={() => handleNavigation('/our-story')}>
                <MdArrowBackIos/> Back
              </button>
              <button className='nav-button-1' onClick={() => handleNavigation('/our-story/part2')}>
                Part 2 <MdArrowForwardIos/>
              </button>
            </>
          );
        case 'part2':
          return (
            <>
              <button className='nav-button' onClick={() => handleNavigation('/our-story/part1')}>
              <MdArrowBackIos/> Part 1
              </button>
              <button className='nav-button-1' onClick={() => handleNavigation('/our-story/part3')}>
                Part 3 <MdArrowForwardIos/>
              </button>
            </>
          );
        case 'part3':
          return (
            <>
              <button className='nav-button' onClick={() => handleNavigation('/our-story/part2')}>
              <MdArrowBackIos/> Part 2
              </button>
              <button className='nav-button-1' onClick={() => handleNavigation('/our-story')}>
                Start Over <MdArrowForwardIos/>
              </button>
            </>
          );
        default:
          return null;
      }
    }
    return null;
  };

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
        <div className='story-main-div'>
          {content.map((item, index) => (
            <p key={index} className={textClass}>{item}</p>
          ))}
        </div>
        {storyIndex === totalStories - 1 && (
          <div className='navigation-buttons'>
            {renderButtons()}
          </div>
        )}
      </div>
    </div>
  );
};

export default StorySlide;
