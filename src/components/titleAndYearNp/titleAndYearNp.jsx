import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const TitleAndYearNp = ({ companyName, year, bgImageUrl }) => {
  const titleRef = useRef(null);
  const yearRef = useRef(null);
  const imageStyle2 = {
    backgroundImage: 'url(https://res.cloudinary.com/drlyyxqh9/image/upload/v1718291703/Bawri%20Group/Non%20Profit/titlebg_uxafjy.jpg)'
  }
  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      yearRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: yearRef.current,
          start: 'top 100%',
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
    <div className='outer-div'>
      <div ref={titleRef} className='company-Name-box-np'>
        <p className='company-Name-box-content-np'>{companyName}</p>
      </div>
      <div className='since-box'>
        <p className='since'>Since</p>
        <p ref={yearRef} style={imageStyle} className='since-year'>{year}</p>
      </div>
    </div>
  );
};

export default TitleAndYearNp;
