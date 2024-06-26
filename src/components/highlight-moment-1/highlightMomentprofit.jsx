import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const HighlightMomentprofit = ({ highlightImg, momentName, content, year, location }) => {
  const highlightMomentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      highlightMomentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: highlightMomentRef.current,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div  className='highlight-moment-fp-div'>
      <p className='highlight-Moment-fp-heading'>Highlight Moment</p>
      <div className='highlight-moment-fp-main-div'>
        <img  className='highlight-moment-fp-img' src={highlightImg} alt='highlight' />
        <div ref={highlightMomentRef} className='highlight-moment-fp-content-box'>
          <div className='highlight-moment-fp-para-content'>
            <p className='highlight-moment-fp-moment-name'>{momentName}</p>
            {content.map((item, index) => (
              <p key={index} className='highlight-moment-content-text poppins-regular'>{item}</p>
            ))}
          </div>
          <div className='fp-metadata-box'>
            <div className='fp-metadata-box-year poppins-regular'>{year}</div>
            <div className='fp-metadata-box-location poppins-regular'>{location}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighlightMomentprofit;
