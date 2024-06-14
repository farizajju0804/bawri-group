import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const HighlightMomentNonprofit = ({ highlightImg, momentName, content, year, location }) => {
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
    <div className='highlight-np-div'>
            <p className='highlight-np-heading'>Highlight Moment</p>
            <div className='highlight-np-main'>
                <img className='highlight-np-img'ref={highlightMomentRef} src={highlightImg} alt='highlight'/>
                    <div className='highlight-np-content-wrapper' >
                        <p className='highlight-np-content-moment-tilte'>Moment Name</p>
                    <div className='highlight-np-content-metadata-box'>
                        <div className='highlight-np-content-metadata'>2012 - Kolkata, India</div>
                    </div>
                        <p className='highlight-np-content-text'>
                        Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta.                         </p>
                    </div>
                   

            </div>
        </div>
  );
};

export default HighlightMomentNonprofit;
