import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const AboutCompanyNp = ({ aboutImg, companyName, content }) => {
  const aboutCompanyRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutCompanyRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutCompanyRef.current,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className='about-np-div'>
    <img ref={aboutCompanyRef} src={aboutImg} className='about-np-img'  alt='education'/>
      <p className='about-np-content-heading'>{companyName}</p>
    <div className='about-np-content-main'>
      <div className='about-np-content-box'>
          {
            content.map((content, index) => (
              <p key={index} className='about-np-content poppins-regular'>{content}</p>
            ))
          }
      </div>
    </div>
  </div>
  );
};

export default AboutCompanyNp;
