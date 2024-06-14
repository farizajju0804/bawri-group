import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const CompanyImageHeader = ({ bgImageUrl, categoryName }) => {
  const headerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const imageStyle = {
    backgroundImage: `url(${bgImageUrl})`
  };

  return (
    <div ref={headerRef} style={imageStyle} className='header-background-box'>
      <div className='overlay-intro-company'>
        <p ref={textRef} className='company-category'>{categoryName}</p>
      </div>
    </div>
  );
};

export default CompanyImageHeader;
