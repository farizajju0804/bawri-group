import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';
import line from './assets/line.png';

gsap.registerPlugin(ScrollTrigger);

const TestimonialCompany = ({ testimonialContent, authorName }) => {
  const testimonialRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
    gsap.fromTo(
      authorRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0,
        scrollTrigger: {
          trigger: authorRef.current,
          start: 'top 100%',
          end: 'bottom 60%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <div className='testimonial-div'>
      <div className='testimonial-Header-box' ref={testimonialRef}>
        <p className='testimonial-heading'>Testimonial</p>
        <div className='testimonial-content-box'>
          {testimonialContent.map((content, index) => (
            <p key={index} className='testimonial-content'>{content}</p>
          ))}
        </div>
      </div>
      <div className='author-box' ref={authorRef}>
        <img src={line} className='decoration-line' alt='line' />
        <p className='author-name'>{authorName}</p>
      </div>
    </div>
  );
};

export default TestimonialCompany;
