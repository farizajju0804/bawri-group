import React from 'react';

const HeroVideo = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <video  autoPlay playsInline loop muted className="absolute object-right inset-0 w-full h-full object-cover bg-center">
          <source src="https://video-previews.elements.envatousercontent.com/bc8e7f57-c8e0-447c-818e-e3cc3d71d670/watermarked_preview/watermarked_preview.mp4" type="video/mp4" />
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
