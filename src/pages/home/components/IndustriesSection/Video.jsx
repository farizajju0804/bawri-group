import React from 'react';

const VideoSection = () => {
  const Skywalk = {
    fontFamily: 'Skywalks',
    color: '#262626',
    fontWeight: 'normal'
  };

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 bg-[#FDDB60] text-white py-2">
        <div className="text-center p-2">
          <h1 style={Skywalk} className="text-2xl md:text-6xl font-bold">Our Journey</h1>
        </div>
      </div>
      <div className="flex p-4 justify-center items-center w-full overflow-hidden bg-[#FDDB60]">
        <div className="pb-2 relative flex justify-center items-center w-full max-w-5xl">
          <video
            className=" w-[90%] rounded-lg shadow-lg"
            controls
            src="https://res.cloudinary.com/drlyyxqh9/video/upload/v1718884404/Bawri%20Group/Landing%20Page/Bawri_Group_Home_Video_-_Slow_-_compressed_wiqnmf.mp4"
            type="video/mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
