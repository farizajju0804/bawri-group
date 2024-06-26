import React from 'react';
const HeroVideo = () => {
    const isMedium = window.innerWidth < 1024
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          playsInline 
          loop 
          autobuffer 
          preload="auto"
          muted 
          className="absolute inset-0 w-full h-full object-cover object-right"
          src={isMedium ? 'https://video-previews.elements.envatousercontent.com/bc8e7f57-c8e0-447c-818e-e3cc3d71d670/watermarked_preview/watermarked_preview.mp4' :'https://res.cloudinary.com/drlyyxqh9/video/upload/v1719314058/Bawri%20Group/Landing%20Page/bg._tetn2e.webm'}
        >
        </video>
      </div>
      <div className="relative z-10 text-center text-white">
        <div className="py-2 year-stat text-3xl font-bold">
          The Bawri Group
        </div>
        <div className="py-2 mb-4 text-[#fddb60] year-desc ">
          A Legacy of Fortitude, Resilience, and Triumph
        </div>
        <div className="py-2 bg-[#fddb60] text-[#262626] mx-auto px-4 year-caption poppins-regular w-fit">
          Established 1874
        </div>
      </div>
    </section>
  );
};

export default HeroVideo;
