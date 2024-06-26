import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const HowWeStarted = ({ content, leftImageUrl, rightImageUrl, bgImageUrl, headingColor }) => {
  const howWeStartedRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
   
    gsap.fromTo(
      leftImageRef.current,
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      rightImageRef.current,
      { opacity: 0, },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const imageStyle = {
    backgroundImage: `url(${bgImageUrl})`,
    backgroundSize : "cover",
    objectFit : 'cover',
    backgroundPosition : 'center'
  };
  const colorStyle = {
    color: headingColor
  };

  return (
    <div ref={howWeStartedRef} className='how-we-started-outer-div' style={imageStyle}>
      <p className='how-we-started-heading' style={colorStyle}>How We Started?</p>
      <div className='how-we-started-content-box'>
        {content.map((content, index) => (
          <p key={index} className='how-We-started-content poppins-regular'>{content}</p>
        ))}
      </div>
      <div className='side-images-box'>
        {
          leftImageUrl && (
        <img ref={leftImageRef} className='left-image' src={leftImageUrl} alt='bed' />
              
          )
        }
        {
          rightImageUrl && (
        <img ref={rightImageRef} className='right-image' src={rightImageUrl} alt='table' />
              
          )
        }
      </div>
    </div>
  );
};

export default HowWeStarted;
