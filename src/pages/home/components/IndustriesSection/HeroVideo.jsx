import React from 'react';

const HeroVideo = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <video  autoPlay playsInline loop muted className="absolute object-right inset-0 w-full h-full object-cover bg-center">
          <source src="https://res.cloudinary.com/drlyyxqh9/video/upload/v1719304360/Bawri%20Group/Landing%20Page/flight-of-gold-bokeh-sparkling-particles-with-alph-2023-11-27-05-17-42-utc_1_enxfdy.mov" type="video/mp4" />
        </video>
      </div>
      <div className="relative z-10 text-center text-white">
        <div className="py-2 year-stat text-3xl font-bold">
          The Bawri Group
        </div>
        <div className="py-2 mb-4 year-desc text-2xl">
          A Legacy of Fortitude, Resilience, and Triumph
        </div>
        <div className="py-2 year-caption">
          Established 1872
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
