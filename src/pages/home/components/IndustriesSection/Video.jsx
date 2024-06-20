import { color } from 'framer-motion';
import React from 'react';

const VideoSection = () => {

    const Skywalk = {
      fontFamily : 'Skywalks',
      color : '#262626',
      fontWeight : 'normal'

    }
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 bg-[#FDDB60] text-white py-2">
        <div className="text-center p-2">
          <h1 style={Skywalk} className="text-2xl md:text-6xl font-bold ">The Journey Of Bawri Group</h1>
          {/* <p className="text-lg md:text-2xl">Showcasing my work and projects</p> */}
        </div>
      </div>
      <div className="min-h-[40vh] relative z-0 lg:h-screen w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="https://res.cloudinary.com/drlyyxqh9/video/upload/v1718884404/Bawri%20Group/Landing%20Page/Bawri_Group_Home_Video_-_Slow_-_compressed_wiqnmf.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default VideoSection;
