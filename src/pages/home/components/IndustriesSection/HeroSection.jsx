import React from 'react';
import './style.css';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-black flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <video autoPlay playsInline loop muted className="absolute inset-0 w-full h-full object-cover transform rotate-180">
          <source src="https://tactusmarketing.com/wp-content/uploads/tactus-waves-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 text-center text-white mix-blend-difference">
        <h1 className="text-[80px] lg:text-9xl leading-normal font-bold font-skywalks mb-4">The Bawri Group</h1>
        {/* <div className="py-2 text-3xl ">A Legacy of Fortitude, Resilience, and Triumph</div> */}
        <div className="text-5xl lg:text-6xl leading-normal font-lato">Established 1872</div>
      </div>
    </section>
  );
};

export default HeroSection;
