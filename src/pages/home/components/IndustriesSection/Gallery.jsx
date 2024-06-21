import React, { useState } from 'react';
import { Gallery, GalleryScene, ImageItem } from "react-gallery-3d";
import { AiOutlineClose } from 'react-icons/ai';

const Gallery3d = () => {
  const Skywalks = {
    fontFamily: 'Skywalks',
    color: "#262626",
    fontWeight: 'normal'
  };
  const isMobile = window.innerWidth < 767;
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src, event) => {
    event.stopPropagation();
    console.log('clickedImage', src);
    if (!selectedImage) {
      setSelectedImage(src);
    }
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <main
      className='flex items-center justify-center flex-col w-full bg-[#fee8d0] p-4'
      style={{
        height: isMobile ? '70vh' : '100vh'
      }}
    >
      <h1 style={Skywalks} className='text-5xl py-8'>
        Glimpses
      </h1>
      
      <GalleryScene 
        style={{
          width: '100%',
          height: '80%'
        }}
        backgroundColor="#FEE8D0"
        orbitControls={{
          enableDamping: true,
          enableZoom: false,
          dampingFactor: 0.01,
          autoRotate: true,
          autoRotateSpeed: 1,
        }}
        disableGround={true}
        camera={{
          fov: isMobile ? 60 : 45,
          position: [0, 10, 150],
        }}
      >
        <Gallery>
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970614/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0020_ld31dw.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970614/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0020_ld31dw.jpg", e)} />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970616/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0021_gclrdy.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970616/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0021_gclrdy.jpg", e)} />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970609/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0010_gbeoll.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970609/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0010_gbeoll.jpg", e)} />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970612/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0014_p6vsbh.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970612/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0014_p6vsbh.jpg", e)} />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970610/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0011_cy4ou4.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970610/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0011_cy4ou4.jpg", e)} />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970613/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0019_sea5jl.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970613/Bawri%20Group/Landing%20Page/glimpses/IMG-20230526-WA0019_sea5jl.jpg", e)} />
          <ImageItem src="https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970610/Bawri%20Group/Landing%20Page/glimpses/IMG-20230521-WA0006_m3ax90.jpg" onClick={(e) => handleImageClick("https://res.cloudinary.com/drlyyxqh9/image/upload/v1718970610/Bawri%20Group/Landing%20Page/glimpses/IMG-20230521-WA0006_m3ax90.jpg", e)} />
          
        </Gallery>
      </GalleryScene>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
          <div className="relative bg-white p-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-xl bg-white p-1"
            >
              <AiOutlineClose />
            </button>
            <img src={selectedImage} alt="Selected" style={{ maxHeight: '80vh', maxWidth: '80vw' }} />
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery3d;
